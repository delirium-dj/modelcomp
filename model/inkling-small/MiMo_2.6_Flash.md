# Inkling-Small — findings by MiMo 2.6 Flash

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's second release (2026-07-30, two weeks after flagship Inkling) — an **Apache 2.0 open-weights** MoE of 276B total / **12B active**, trained on NVIDIA GB300 NVL72, sharing Inkling's encoder-free native multimodal architecture (audio as dMel spectrograms, 40×40 image patches via hMLP) and variable thinking effort. The pitch: match the 975B/41B flagship at a quarter the size — vendor card shows it *beating* Inkling on SWE-bench Verified (80.2 vs 77.6), Terminal-Bench 2.1 (64.7 vs 63.8), GPQA (89.5 vs 87.2) and HLE (31.6 vs 29.7); independent AA puts it one point behind (Index 40 vs 41). AA: "No open-weights model at its size or smaller scores higher." Known regressions: audio input recommended only under **2 minutes** (flagship: 20 min), FORTRESS adversarial safety 71.6 vs 78.0, and no endpoint currently serves the advertised full 1M.
- **Provider / access:** Hugging Face (`thinkingmachines/Inkling-Small`, BF16 + NVFP4 ≥180 GB VRAM), Tinker (fine-tuning) + Tinker Playground, first-party API, DeepInfra/BaseTen/OpenRouter third parties.
- **Release / knowledge:** released 2026-07-30; knowledge cutoff not published.
- **IDs:** `inkling-small` (first-party) / `thinkingmachines/inkling-small` (HF/gateways).
- **Context window:** advertised **up to 1M** (model card, AA), but **live endpoints serve 256K (first-party per LLM Stats) to 524,288 (DeepInfra/third-party; tracker shows a 1M→524K change on 2026-09-26)**; max completion 262,144 on the fp8 endpoint.
- **Modalities:** **text + image + audio in** (native reasoning over speech; VoiceBench/MMAU/AudioMC), text out; reasoning yes (5-effort dial, evals at 0.99); tool calls yes (one provider exposes tool calling/logprobs; structured-output support uneven per provider).
- **Pricing (as of 2026-10-07):** first-party **$0.30 in / $1.20 out** per 1M, cached **$0.06**; third parties $0.45–$0.50/$1.20 (cache $0.10); AA measured **~$0.07 per Intelligence-Index task** — ~18× cheaper per task than GPT-5.6 Sol (59 index vs its 40); self-host free under Apache 2.0.
- **Architecture:** sparse MoE 276B/12B active; encoder-free multimodal; ~24K output tokens per Index task (token-efficient vs DSV4 Flash's ~45K).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.7** vendor (internal harness, contaminated solutions zeroed) / **55.0** (AA, independent) — **far under the 85% ref**
- MCP-Atlas: **79.6 public / 79.2 all** (eval suite run with Scale AI) — **clears the 75%+ ref**
- BrowseComp (with context mgmt): **77.4** (vendor-run; Qwen3.5-397B 78.6, Inkling 77.1)
- Toolathlon Verified: 54.4; GDPval-AA v2: **1269 Elo** (beats flagship's 1238); AA-Briefcase: **917 Elo** (beats flagship's 839; best in its table's open-weight column), 34 turns/task vs Inkling's 81
- τ³-Banking: **15.5%** (weak — Inkling 23.7, DSV4 Flash 22.9); OSWorld / ALE: none found

Reasoning / knowledge:

- GPQA Diamond: **89.5** vendor / 88.5–89 (Epoch/AA, independent) — **just under the 90%+ ref**
- HLE text-only: **31.6** vendor / **33.3** (Epoch, updated 2026-08-06) — **under the 40%+ ref**; HLE with tools: 47.8 (vendor)
- AA Intelligence Index v4.1: **40** (AA independent) — **under the 60+ ref**; ties DeepSeek V4 Flash, no smaller open model scores higher
- AIME 2026: 95.5; HMMT Feb 2026: 90.2 (elite math); CritPt 8.3 (but AA lists 8)
- ARC-AGI-1: **84.0**, ARC-AGI-2: **40.1** (ARC Prize); IFBench **82.2** (#5 of its class, Model Beats); SimpleQA Verified 20.6; AA-Omniscience −9.0 (accuracy 31%, hallucination rate slightly better than flagship's 63%)

Coding (vendor card unless noted):

- SWE-bench Verified: **80.2** (bash-only harness) — top-band for its class; SWE-bench Pro public: 55.9; SWE-Interact: none
- SciCode: **48.7** vendor / 49.7 (Epoch) — **under the 55%+ ref**
- No DeepSWE / Terminal-Bench 4.0 / coding-index rows published
- Speed: 133 tok/s (AA, #7/101 in class; class median 66)

Long context:

- Advertised 1M but **served 256K–524K**; AA-LCR is an Index component but no individual figure published → served-context reality governs.

Multimodal (vendor-run):

- MMMU Pro Standard-10: **74.0**; CharXiv RQ: 77.4 / 81.3 (with python); AudioMC: 54.9, MMAU: **77.0**, VoiceBench: **90.1** (near flagship's 91.4); audio inputs recommended under 2 minutes only; no video input, no PDF rows.

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 79.6 clears the 75%+ ref, BrowseComp 77.4 and best-in-class open GDPval/Briefcase Elos are genuine strengths; TB2.1 55–64.7 collapses against the 85 ref, τ³-Banking 15.5 is weak, no OSWorld/ALE.
- **Reasoning: 82/100.** All three refs miss narrowly — GPQA 89.5 (vs 90), HLE 31.6–33.3 (vs 40), AA Index 40 (vs 60) — but elite math (AIME 95.5, HMMT 90.2), ARC-AGI-1 84, and IFBench #5 keep it above the pure-miss tier.
- **Context window: 90/100.** Advertised 1M, but no live endpoint serves it: first-party 256K, third parties 524K — between the 262K (90) and 1M bands, served reality puts it at 90.
- **Multimodal: 90/100.** Native text + image + **audio** in → audio-in band (90–100); MMAU 77.0, VoiceBench 90.1, MMMU-Pro 74.0, CharXiv 81.3 are solid, discounted for the 2-minute audio cap (10× shorter than the flagship) and absent video/PDF.
- **Coding: 77/100.** SWE-bench Verified 80.2 (vendor harness) is the standout row for a 12B-active model; every ref row misses — SciCode 48.7 (<55), TB2.1 55–64.7 (<85), no DeepSWE/TB4.0/coding-index.
- **Cost efficiency: 96/100.** $0.30/$1.20 with 20% cache, ~$0.07/task measured, and Apache 2.0 weights for free self-hosting — second-cheapest in AA's per-task deployment comparison, beaten only by DSV4 Flash's $0.03.
- **Overall Score: 84/100.** (80+82+90+90+77)/5 = 83.8 → 84 — the efficiency story of the quarter: flagship-adjacent independent intelligence (40 vs 41) with native audio at a third the price, discounted for a terminal-agent score in the 50s–60s, three just-missed reasoning refs, and a served context that hasn't caught up to its marketing.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Thinking Machines announcement + model card, Hugging Face, Artificial Analysis launch analysis, OrcaRouter deep-dive, Model Beats, TheModelBeat, LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
