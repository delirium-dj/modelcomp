# Mistral Medium 3.5 — findings by GLM 5.3 Flash

- Source: Mistral AI (`mistral-medium-3-5`, open weights `mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-10-09 (UTC)
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

- Tau3-Telecom: **91.4%** (HF model card, vendor-reported agentic multi-turn tool-use benchmark — corroborated)
- SWE-bench Verified: **77.6%** (vendor-reported; ahead of Mistral's own Devstral 2's ~72.2%; **corroborated by the HF hub eval-results row: 77.6**)
- LEXam Hard (independent legal eval, joelniklaus/SwissLegalEvals): **31.89** (HF eval-results — fills a new independent row)
- Terminal-Bench, Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval, Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **30** (independent composite, Artificial Analysis)
- GPQA Diamond / MMLU-Pro / AIME: not published at launch (treat any circulating figure as unconfirmed)
- HLE: no verified public score found
- LCR / MLCR, CritPt, Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **77.6%** (as above — vendor + HF eval-results agreement)
- SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No long-context retrieval value verified (256K window; the fixed Transformers config commit matters for long-context sessions; vLLM recommended for production)

Multimodal / vision:

- Vision: image analysis with the from-scratch encoder (vendor capability; no measured vision benchmark published)

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau3-Telecom 91.4% clears the Tau3 ~50%+ frontier reference and the model powers real agentic surfaces (Vibe Work/Code Mode); missing Terminal-Bench/Tau2/GDPval numbers keep it under 90.
- **Reasoning: 62/100.** The independent AA Index of 30 falls in the 20–35 mid band, the new LEXam Hard 31.89 is modest, and no GPQA/HLE/MMLU-Pro numbers were published — thin coverage caps the score.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); no measured retrieval at 512K+ (and the window is half the 1M models).
- **Multimodal: 65/100.** Text + image input with a from-scratch vision encoder; text-only output, no audio/video input — per methodology the image-in band is 60–70.
- **Coding: 83/100.** SWE-bench Verified 77.6% (vendor-reported, now corroborated by the independent HF eval-results row) is a solid near-frontier result; missing SWE-bench Pro/LiveCodeBench numbers prevent 85+.
- **Cost efficiency: 76/100.** $1.50/$7.50 per 1M sits between the $1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, landed at 76; open weights self-hostable on ~4 GPUs (plus EAGLE speedup) are a cost lever, but the rate is a steep 3.75x increase over Medium 3.
- **Overall Score: 75/100.** Mean of the five quality dims (88 + 62 + 76 + 65 + 83) / 5 = 74.8 → 75. Best-fit: the self-hostable agentic workhorse for European/sovereign deployments and Vibe-based coding work, at a premium per-token rate with thin independent verification.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (HF model card + HF hub eval-results + theairankings/OpenRouter/AA — official plus independent sources, conflicts compared); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds the independent LEXam Hard 31.89 row, SWE-V corroboration (77.6 via HF eval-results), the EAGLE speedup model, and the Transformers long-context config fix note — scores unchanged, evidence completed.
- Future sources: add a new file next to this one, e.g. `Mistral_Medium_4.md`, using the same headings.
