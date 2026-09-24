# Mistral Medium 3.5 — findings by GLM 5.3 Flash

- Source: Mistral AI (`mistral-medium-3-5`, open weights `mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 (dense 128B)
- **Short description:** Mistral AI's flagship working model that unifies chat, reasoning, coding and vision in one dense 128B set of weights; the default model behind Le Chat / Vibe (Work Mode and Code Mode) and the model behind Vibe's coding agent and CLI (replacing Devstral 2). Open weights under a modified MIT licence.
- **Provider / access:** La Plateforme API (`mistral-medium-3-5`, $1.50/$7.50); open weights free on Hugging Face; also Nvidia NIM, OpenRouter `mistralai/mistral-medium-3.5`, Ollama; self-hostable on as few as four GPUs. No Free ID on OpenCode Zen.
- **Release / knowledge:** Announced 2026-05-22 (docs version-stamp April 2026); knowledge cutoff not verified.
- **IDs:** `mistral-medium-3-5` (La Plateforme / OpenRouter); `mistralai/Mistral-Medium-3.5-128B` (Hugging Face).
- **Context window:** 256,000 tokens (262,144 in some catalogs — verified via theairankings and OpenRouter).
- **Modalities:** text and image input (custom vision encoder trained from scratch, variable image sizes); text output; reasoning yes with a configurable `reasoning_effort` parameter per request; tool calls (τ³ agentic multi-turn); JSON mode.
- **Pricing (as of 2026-09-24):** $1.50 / $7.50 per 1M in/out; cached input ~$0.15 per 1M; a ~3.75x increase over Mistral Medium 3's $0.40/$2.00. Open weights free to self-host within licence terms (companies above ~$20M global monthly revenue need a separate commercial licence).
- **Architecture:** Dense 128B parameters (not MoE); open weights under modified MIT (revenue threshold carve-out).

### Raw benchmarks found

Agent / tool use:

- τ³-Telecom: **91.4** (Hugging Face model card, vendor-reported agentic multi-turn tool-use benchmark)
- SWE-bench Verified: **77.6%** (vendor-reported; ahead of Mistral's own Devstral 2's ~72.2%)
- Terminal-Bench, Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval, Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30** (independent composite, Artificial Analysis)
- GPQA Diamond / MMLU-Pro / AIME: not published at launch (treat any circulating figure as unconfirmed)
- HLE: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **77.6%** (as above)
- SWE-bench Pro: not published at launch
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval value verified (256K window claimed; an early long-context bug in the Transformers config was fixed, vLLM recommended for production)

### Normalized scores (1–100)

- **Tool use: 88/100.** τ³-Telecom 91.4 clears the Tau3 ~50%+ frontier reference and the model powers real agentic surfaces (Vibe Work/Code Mode); missing Terminal-Bench/Tau2/GDPval numbers keep it under 90.
- **Reasoning: 62/100.** The independent AA Index of 30 falls in the 20–35 mid band and no GPQA/HLE/MMLU-Pro numbers were published — thin coverage caps the score.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); no measured retrieval at 512K+ (and the window is half the 1M models).
- **Multimodal: 65/100.** Text + image input with a from-scratch vision encoder; text-only output, no audio/video input — per methodology the image-in band is 60–70.
- **Coding: 83/100.** SWE-bench Verified 77.6% (vendor-reported) is a solid near-frontier result; missing SWE-bench Pro/LiveCodeBench numbers and vendor-only sourcing prevent 85+.
- **Cost efficiency: 76/100.** $1.50/$7.50 per 1M sits between the $1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, landed at 76; open weights self-hostable on ~4 GPUs are a cost lever, but the rate is a steep 3.75x increase over Medium 3.
- **Overall Score: 75/100.** Mean of the five quality dims (88 + 62 + 76 + 65 + 83) / 5 = 74.8 → 75. Best-fit: the self-hostable agentic workhorse for European/sovereign deployments and Vibe-based coding work, at a premium per-token rate with thin independent verification.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (theairankings.com model page with Mistral/HF/AA data, OpenRouter, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_Medium.md`, using the same headings.
