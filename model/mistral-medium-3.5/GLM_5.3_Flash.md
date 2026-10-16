# Mistral Medium 3.5 — findings by GLM 5.3 Flash

- Source: Mistral AI (`mistral-medium-3-5`, open weights `mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 (dense 128B — Mistral's "first flagship merged model")
- **Short description:** Mistral AI's flagship working model that unifies chat, reasoning, coding and vision in one dense 128B set of weights; the default model behind Le Chat / Vibe (Work Mode and Code Mode) and the model behind Vibe's coding agent and CLI (replacing Devstral 2 and Magistral in Le Chat). Open weights under a modified MIT licence.
- **Provider / access:** La Plateforme API (`mistral-medium-3-5`, $1.50/$7.50); open weights free on Hugging Face (80K downloads last month); also Nvidia NIM, OpenRouter `mistralai/mistral-medium-3.5`, Ollama, llama.cpp GGUFs, SGLang day-zero docker tags; self-hostable on as few as four GPUs. An EAGLE model is released for faster local inference. No Free ID on OpenCode Zen.
- **Release / knowledge:** Announced 2026-05-22 (docs version-stamp April 2026); knowledge cutoff not verified.
- **IDs:** `mistral-medium-3-5` (La Plateforme / OpenRouter); `mistralai/Mistral-Medium-3.5-128B` (Hugging Face).
- **Context window:** 256,000 tokens (262,144 in some catalogs — verified via theairankings, OpenRouter and the HF card "256k context length").
- **Modalities:** text and image input (custom vision encoder trained from scratch, variable image sizes/aspect ratios); text output; reasoning yes with a configurable `reasoning_effort` parameter per request ('none'/'high' — 'high' recommended for agentic/coding); tool calls (τ³ agentic multi-turn, native function calling, JSON output); multilingual (dozens of languages).
- **Pricing (as of 2026-10-09):** $1.50 / $7.50 per 1M in/out; cached input ~$0.15 per 1M; a ~3.75x increase over Mistral Medium 3's $0.40/$2.00. Open weights free to self-host within licence terms (companies above ~$20M global monthly revenue need a separate commercial licence).
- **Architecture:** Dense 128B parameters (not MoE); open weights under modified MIT (revenue threshold carve-out). Note: the Transformers config had a long-context-degrading bug, fixed in commit c4be198 — pre-fix GGUFs are affected; vLLM/SGLang recommended.

### Raw benchmarks found

> HF model card (vendor-reported) + HF hub eval-results (independent) + Artificial Analysis. Previously-missing row added.

Agent / tool use:

- Tau3-Telecom: **91.4%** (HF model card, vendor-reported agentic multi-turn tool-use benchmark — corroborated); Tau2-Bench: **94.2%** (AA — added 2026-10-16, elite)
- SWE-bench Verified: **77.6%** (vendor-reported; ahead of Mistral's own Devstral 2's ~72.2%; **corroborated by the HF hub eval-results row: 77.6**)
- LEXam Hard (independent legal eval, joelniklaus/SwissLegalEvals): **31.89** (HF eval-results — fills a new independent row)
- Added 2026-10-16 (BenchLM refresh — independent rows): Terminal-Bench 2.1 (Vals) **39.0%**; GDPval-AA **Elo 875** / 13.0%; Gert Labs **39.10%**; AA Agentic Index **9.3%** — all weak
- Claw-Eval / MCPAtlas / Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30** (2026-10-09 reading) — CONFLICT: the 2026-10-15 refresh reads **14.2** (AA current composite; re-scale, both cited)
- GPQA Diamond: **74.8%** (AA — added 2026-10-16, fills the missing row) — CONFLICT: Vals reads **34.8%** (config/harness difference, both cited); MMLU-Pro (Vals): **75.3%**
- HLE: **13.8%** (AA-HLE — added 2026-10-16; well under the 40% bar); CritPt: **0.0%** (AA)
- AA-LCR: **69.3%** (AA — added 2026-10-16, fills the previously-missing LCR)
- AA-Omniscience: accuracy **24.7%**, hallucination rate **81.6%** (added 2026-10-16 — poor); AA-IFBench: **68.8%**
- LCR / MLCR beyond the above: no verified public score found

Coding:

- SWE-bench Verified: **77.6%** (as above — vendor + HF eval-results agreement) — CONFLICT: Vals independent harness reads **66.4%** (added 2026-10-16)
- AA-SciCode: **40.2%** / AA Coding Index: **46.9%** (added 2026-10-16 — weak)
- SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR **69.3%** measured (added 2026-10-16); 256K window; the fixed Transformers config commit matters for long-context sessions; vLLM recommended for production

Multimodal / vision:

- AA-MMMU-Pro: **64.9%** (added 2026-10-16 — the first measured vision row, corroborating the from-scratch encoder claim)

### Normalized scores (1–100)

- **Tool use: 78/100.** CHANGED from 88 — Tau2 94.2% (AA, new) and Tau3-Telecom 91.4% clear the frontier references, but the newly surfaced weak rows (TB2.1 Vals 39.0%, AA Agentic Index 9.3%, GDPval-AA Elo 875, Gert 39.1%) show the agentic edge is narrow outside Mistral's own harness.
- **Reasoning: 58/100.** CHANGED from 62 — the AA Index conflict resolves downward (30 → 14.2 on the current composite), the newly measured HLE 13.8% and CritPt 0.0% are very weak, and the GPQA split (74.8 AA vs 34.8 Vals) is unresolved; LEXam 31.89 and MMLU-Pro 75.3% are modest.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); AA-LCR 69.3% now measured; no retrieval at 512K+ (and the window is half the 1M models).
- **Multimodal: 65/100.** Text + image input with a from-scratch vision encoder, now measured at AA-MMMU-Pro 64.9%; text-only output, no audio/video input — per methodology the image-in band is 60–70.
- **Coding: 78/100.** CHANGED from 83 — SWE-bench Verified 77.6% (vendor, HF-corroborated) but the Vals independent reading of 66.4% plus AA-SciCode 40.2% and AA Coding Index 46.9% (both newly surfaced) pull the band down; missing SWE-Pro/LiveCodeBench remain.
- **Cost efficiency: 76/100.** $1.50/$7.50 per 1M sits between the $1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, landed at 76; open weights self-hostable on ~4 GPUs (plus EAGLE speedup) are a cost lever, but the rate is a steep 3.75x increase over Medium 3.
- **Overall Score: 71/100.** CHANGED from 75 — mean of the five quality dims (78 + 58 + 76 + 65 + 78) / 5 = 355/5 = 71.0. Best-fit: the self-hostable agentic workhorse for European/sovereign deployments and Vibe-based coding work, at a premium per-token rate with now-documented harness-sensitive benchmarks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (HF model card + HF hub eval-results + theairankings/OpenRouter/AA — official plus independent sources, conflicts compared); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds the independent LEXam Hard 31.89 row, SWE-V corroboration (77.6 via HF eval-results), the EAGLE speedup model, and the Transformers long-context config fix note; 2026-10-16 re-research: 23 BenchLM rows added (Tau2 94.2%, AA Index re-scale 30→14.2, GPQA 74.8-vs-34.8 and SWE-V 77.6-vs-66.4 conflicts cited) — Tool 88→78, Reasoning 62→58, Coding 83→78, Overall 75→71).
- Future sources: add a new file next to this one, e.g. `Mistral_Medium_4.md`, using the same headings.
