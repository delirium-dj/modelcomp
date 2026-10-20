# Ox Alpha — findings by Grok 4.6

- Source: Z.AI stealth preview (`stealth/ox-alpha`), revealed as GLM-5.3-Flash
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Retired OpenRouter/OpenCode stealth alias of Z.AI GLM-5.3-Flash (not GLM-5.3). The `stealth/ox-alpha` route is dead; current access is the named Flash API. This folder tracks the stealth ID, not a second set of weights.
- **Provider / access:** Historically OpenRouter `stealth/ox-alpha` (2026-08-20) and OpenCode Zen free stealth. OpenRouter now states the listing has no endpoints and points to `z-ai/glm-5.3-flash`. Z.AI API code `glm-5.3-flash`.
- **Release / knowledge:** Stealth drop 2026-08-20; Z.AI unmasked it in the GLM-5.3-Flash blog 2026-08-26. Knowledge cutoff not published under the ox-alpha name.
- **IDs:** `stealth/ox-alpha` (retired); revealed ID `glm-5.3-flash` / `z-ai/glm-5.3-flash`. Do not scaffold a duplicate Flash folder from this alias.
- **Context window:** 1,048,576 tokens on the OpenRouter ox-alpha page; Flash docs 1M / 128K max out.
- **Modalities:** OpenRouter ox-alpha page: text, images, and video in; text out. Matches Flash's native multimodal card.
- **Pricing (as of 2026-10-20):** Stealth lane was $0 for a limited window and is withdrawn (OpenCode removed Ox Alpha Free / `x-preview-f-free`; OpenRouter endpoints array empty). Named successor list: Z.AI $0.15 / $0.50 per 1M input/output (50% launch discount ended 2026-09-09). Cost scored on current paid Flash access, not the closed free preview. Prompts/completions were retained by the stealth provider and not used for training (OpenRouter).
- **Architecture:** GLM-5.3-Flash: 320B total / 18B active hybrid sparse+linear attention MoE; MIT open weights under the Flash name.

### Raw benchmarks found

No separate ox-alpha leaderboard. Z.AI: "we tested GLM-5.3-Flash anonymously as ox-alpha". Numbers below are **GLM-5.3-Flash** vendor/AA figures, labeled with that ID — not silent merges of a different SKU.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI GLM-5.3-Flash blog; AA listing for GLM 5.3 Flash also 84.3%)
- Toolathlon Verified: **78.4** (Z.AI Flash)
- AutomationBench v1.0.6: **48.8** (Z.AI Flash)
- GDPval-AA v2: **1773** (Z.AI Flash; AA-evaluated)
- Agents' Last Exam: **26.3** (Z.AI Flash)
- OSWorld 2.0: **59.1** (Z.AI Flash)
- Tau3 / Claw-Eval: **no verified public score found** under ox-alpha or Flash

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1.1: **57** (Z.AI Flash blog)
- HLE w/ tools: **55.3%** (Z.AI Flash)
- GPQA Diamond: **no verified public score found** on the Flash table
- CharXiv Reasoning w/ tools: **89.4** (Z.AI Flash)

Coding:

- DeepSWE v1.1: **63.4** (Z.AI Flash)
- NL2Repo: **56.3** (Z.AI Flash)
- SWE-bench Verified: **no verified public score found** for ox-alpha / Flash

Long context:

- 1M window on both IDs. **no verified public MRCR / RULER / GraphWalks score found**

### Normalized scores (1–100)

- **Tool use: 91/100.** Same evidence as Flash: GDPval-AA 1773 and TB 2.1 84.3% are frontier-adjacent. Capped by AutomationBench 48.8, OSWorld 2.0 59.1, and no ox-alpha-specific harness.
- **Reasoning: 90/100.** Flash Index 57 and HLE-tools 55.3%. Capped by no GPQA on the Flash table.
- **Context window: 96/100.** 1M documented. Not 100: no ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Stealth card and Flash card both take image+video. Capped by text-only output and no audio.
- **Coding: 86/100.** Flash TB 2.1 84.3% and DeepSWE 63.4. Capped by missing SWE-Verified and no stealth-only coding board.
- **Cost efficiency: 94/100.** Free stealth is gone; current equivalent is paid Flash $0.15/$0.50, between ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92). Not 100.
- **Overall Score: 90/100.** Mean of 91 + 90 + 96 + 85 + 86 = 89.6 → 90 half-up. Best fit: historical stealth ID only — new work should call `glm-5.3-flash`; this report exists so the ox-alpha folder stays evidence-backed without implying a second model.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (OpenRouter ox-alpha page, Z.AI GLM-5.3-Flash blog/docs, contemporaneous unmasking coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
