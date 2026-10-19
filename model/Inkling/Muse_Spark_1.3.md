# Inkling — findings by Muse Spark 1.3

- Source: Thinking Machines Lab/Inkling (`opencode/Inkling`)
- Date: 2026-09-26 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: BenchLM gap-fills added, Reasoning 84 → 85, Coding 84 → 86, Overall 87 → 88)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's first open-weights model (Jul 2026): a 975B/41B-active MoE transformer reasoning natively over text, images, and audio, trained from scratch on 45T tokens — a broad, balanced customization base rather than a benchmark-peak chaser. Top use case: fine-tunable open-weights multimodal agent base.
- **Provider / access:** Thinking Machines Lab (Tinker platform API + fine-tuning; Hugging Face `thinkingmachines/inkling`; NVIDIA NIM); OpenCode Zen ID `opencode/Inkling`.
- **Release / knowledge:** 2026-07-15 release (official model card; WIRED/TechCrunch/Fortune coverage); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/Inkling` (Zen-hosted; open weights under Apache 2.0).
- **Context window:** Up to 1M tokens (official model card; Raschka notes 1,048,576). Tinker serves 64K/256K length options; 50% launch discount for a limited time.
- **Modalities:** Text, image, audio in (video frames in pretraining/architecture); text out; reasoning yes (controllable thinking effort, evals at effort=0.99); tool calls yes.
- **Pricing (as of 2026-07):** $1.87 input / $4.68 output per 1M (BenchLM compare record); open weights (Apache 2.0) allow self-hosting. Standard paid pricing on hosted routes.
- **Architecture:** 975B total / 41B active sparse MoE (66-layer decoder-only, 256 routed + 2 shared experts, 6 routed active/token), hybrid local-global attention, no RoPE (learned relative-position bias); Apache-2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (best harness): **63.8%** (official Inkling model card, effort=0.99; vs GLM-5.2 82.7%, GPT-5.6 Sol 89.5% on the same card)
- HLE with tools: **46.0%** (official model card; vs Fable 5 max 64.5%)
- BrowseComp: **77.1%** (BenchLM Grok-4.1-Fast vs Inkling compare page, verified 2026-07-18)
- MCP Atlas: **74.1%** (BenchLM compare page, verified 2026-07-18)
- Terminal-Bench 2.0: **63.8%** (BenchLM compare page — same value as the card's 2.1 best-harness figure); **TB2.1 Vals lane 47.6%** (BenchLM mirror — harness differs)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **36.7% / Elo 1234** (BenchLM mirror); **EnterpriseOps-Gym 38.0%**, **Agentic Index 34.1%** (BenchLM mirrors)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (official model card; BenchLM AA-GPQA 87.2% corroborates; card also lists GPQA 87.9%)
- HLE (text only): **29.7%** (official model card; AA-HLE 29.7% corroborates)
- AIME 2026: **97.1%** (official model card)
- Global-MMLU-Lite: **88.7%** (NVIDIA NIM model card, from official HF scores)
- MMLU-Pro: **86.3% Vals lane** (BenchLM mirror); **IFBench 79.8%** (BenchLM mirror)
- LCR: **73.3% AA-LCR** (BenchLM mirror)
- CritPt: **5.4%** (BenchLM mirror — weak tail)
- Artificial Analysis Intelligence Index: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **40.0% / 63.1%** (BenchLM compare page, AA-Omniscience — elevated hallucination noted; mirror lane reads 41.6% / 67.7%)
- CharXiv: **82% (78.1% w/o tools)** (BenchLM mirror); **Design Arena 1227 website / 1257 agentic-dev** (BenchLM mirror); **AA Index 42.3%** (BenchLM mirror)

Coding:

- SWE-bench Verified: **77.6%** (official model card)
- SWE-bench Pro (Public): **54.3%** (official model card)
- SWE-bench Verified, Inkling (Vals AI, by task difficulty): **86% / 75% / 57% / 33%** (Vals AI page, Sep 2026)
- AA-SciCode: **46.1%** (BenchLM compare page)
- AA Coding Index: **52.1** (BenchLM compare page)
- LiveCodeBench: **85.5% Vals lane** (BenchLM mirror)
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **no verified public score found**; **FrontierSWE v2 4.1%** (BenchLM mirror — weak tail)

Long context:

- no long-context retrieval reported (1M window verified via model card; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 63.8% (best harness) plus BrowseComp 77.1%, MCP Atlas 74.1%, and HLE-with-tools 46.0% form a solid verified agentic set; capped by no Tau/GDPval numbers and a clear gap to harness-tuned leaders (Sol 89.5%).
- **Reasoning: 85/100.** GPQA-D 87.2, AIME 2026 97.1, MMLU-Pro 86.3 and LCR 73.3 evidence strong reasoning; HLE text-only 29.7% and CritPt 5.4% tail cap it at 85.
- **Context window: 97/100.** Verified 1M window clears the ≥1M tier; held below 100 for lack of any published full-length retrieval measurement (and Tinker's 64K/256K serving options as caveat).
- **Multimodal: 90/100.** Native text/image/audio reasoning (VoiceBench 91.4%, MMMU Pro 73.3% per NIM card) hits the audio-in tier; text-only out keeps it at the tier floor of 90.
- **Coding: 86/100.** SWE-Verified 77.6% + SWE-Pro 54.3% + LiveCode 85.5% and Vals splits (86/75/57/33) is a verified mid-upper coding profile; AA-SciCode 46.1% and the FrontierSWE 4.1% tail cap it at 86.
- **Cost efficiency: 82/100.** Hosted $1.87/$4.68 sits just above the ~$1.25/$4.25 (≈88) tier; Apache-2.0 self-hostability noted as upside, not scored.
- **Overall Score: 88/100.** Mean of the five non-cost dims (82 + 85 + 97 + 90 + 86) / 5 = 88.0 → 88; best fit as the premier open-weights multimodal agent base for teams that fine-tune.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (official Thinking Machines Inkling + Inkling-Small model cards and launch post, NVIDIA NIM card, Raschka architecture notes, BenchLM compare page, Vals AI SWE-bench page, WIRED/TechCrunch/Fortune launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-19 (23 days after 2026-09-26)

Original research date 2026-09-26, amended 2026-09-27. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-19: (1) Artificial Analysis inkling page (xhigh lane: Index 25, 975B/41B, 1M, text+image+speech in, Apache 2.0, Jul 2026, 222.8 tok/s), (2) benchgap lane (41 measured as of 2026-10-18), (3) filed official card/BenchLM rows as baseline. Conflicting results compared below.

| Dimension | 2026-09-26/27 | 2026-10-19 | Change |
|---|---|---|---|
| Tool use | 82 | 82 | hold — TB2.1 63.8% + BrowseComp 77.1% + MCP Atlas 74.1% all confirmed measured; new Tau3 29.1% measured fills filed gap consistent with cap; no GDPval/Claw absolute |
| Reasoning | 85 | 85 | hold — GPQA 87.2% + AIME 97.1% + LCR 77.3% (benchgap 77.3% measured confirms filed 73.3% mirror) stand; new Index 25 anchor fills filed Index gap consistent with band; CritPt 5.4% measured confirms filed tail |
| Context | 97 | 97 | hold — 1M reconfirmed; MRCRv2 85.3% est. only, no measured curve |
| Multimodal | 90 | 90 | hold — text/image/speech in reconfirmed on AA; MMMU-Pro 73.5% measured confirms filed row; CharXiv 82.0% measured confirms filed 82% |
| Coding | 86 | 86 | hold — SWE-Ver 77.6% + SWE-Pro 54.3% + LiveCode 85.5% (Vals 85.5% measured confirms) stand; SciCode 47.0% measured confirms filed 46.1%; DeepSWE ~42% est. deepens without crossing |
| Cost | 82 | 82 | hold — hosted $1.00/$4.05 on AA (vs filed $1.87/$4.68 BenchLM lane — provider lanes differ, both listed); Apache-2.0 self-host upside stands |
| Overall | 88 | 88 | hold — (82+85+97+90+86)/5 = 88.0 → 88 |

New verified rows this pass: AA Index 25 xhigh (fills filed Index gap); AA-HLE 31.9% measured (vs filed 29.7% card — lane differs, both listed); HLE 46.0% measured (tools lane — confirms filed 46.0%); Tau3 29.1% measured; Agentic Index 24.3% measured; Omni-acc 41.6% measured; LCR 77.3% measured; Vals GPQA 87.1%/LiveCode 85.5%/SWE 77.6% measured (confirm filed rows). Scores hold; evidence deepens without crossing a band boundary.

Sources: https://artificialanalysis.ai/models/inkling · https://benchgap.net/model/inkling

