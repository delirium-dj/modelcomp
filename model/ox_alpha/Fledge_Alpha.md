# Ox Alpha — findings by Fledge Alpha

- Source: Z.ai (alias of `glm-5.3-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth preview alias of GLM-5.3 Flash)
- **Short description:** The stealth identifier GLM-5.3-Flash was tested under on OpenCode and OpenRouter before its public Aug 26, 2026 launch as `zai-org/GLM-5.3-Flash`. Identical weights and benchmarks to the launched model.
- **Provider / access:** Historically OpenRouter (`ox-alpha`) and OpenCode (alias route); superseded by the public `glm-5.3-flash` ID on Aug 26, 2026.
- **Release / knowledge:** Public name launched 2026-08-26; stealth alias earlier in August 2026.
- **IDs:** `ox-alpha` (alias) → `glm-5.3-flash` (current)
- **Context window:** 1,048,576 tokens; 128K max output.
- **Modalities:** text, image, video, file in; text out; reasoning always-on; MIT open weights.
- **Pricing (as of 2026-10-02):** Identical to GLM-5.3-Flash — $0.15/M in, $0.03/M cached, $0.50/M out.
- **Architecture:** 320B total / 18B active MoE (same weights as the launched model).

### Raw benchmarks found

Ox Alpha's benchmarks during its stealth run are the same figures later attributed to GLM-5.3-Flash:

Agent / tool use:

- Toolathlon Verified: **78.4%**; AutomationBench: **48.8%**; OSWorld 2.0: **59.1%**; Agents' Last Exam: **26.3%**

Reasoning / knowledge:

- AA Intelligence Index: **57**; HLE w/tools: **55.3%**; GPQA Diamond: ~86 (conflicted vendor/aggregator range 60.5–86.4)

Coding:

- Terminal-Bench 2.1: **84.3%**; DeepSWE v1.1: **63.4%**; SWE-bench Verified: 78.2% (rankllms aggregator)

Multimodal:

- CharXiv Reasoning w/tools: **89.4%**; OfficeQA Pro: 62.4%; LVBench class: BabyVision 53.4%

Long context:

- 1M window; no independent long-context retrieval figure.

### Normalized scores (1–100)

- **Tool use: 76/100.** Same evidence as the launched GLM-5.3-Flash — Toolathlon 78.4% stands out, GDPval-Elo 1773 present.
- **Reasoning: 74/100.** AA Index 57 and HLE-w/tools 55.3%; inconsistent GPQA reporting limits confidence.
- **Context window: 95/100.** Flat-billed 1M-token window.
- **Multimodal: 85/100.** First natively multimodal GLM-5 (image/video/file in) at flash pricing; AA Coding Index 69 class.
- **Coding: 80/100.** Terminal-Bench 2.1 84.3% and DeepSWE 63.4% mirror the launched model.
- **Cost efficiency: 97/100.** $0.15/$0.50 with MIT weights and a self-host path.
- **Overall Score: 82/100.** Mean of the five quality dims; Ox Alpha is the stealth name, GLM-5.3-Flash is the public ID for the same model — use glm-5.3-flash.md for current routing.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Z.ai launch post, tensorfeed/capitalandcompute note on the stealth ID, AA pages for the launched GLM-5.3-Flash); scores are normalized 1–100 interpretations, not official vendor scores. Ox Alpha is the pre-launch alias of GLM-5.3-Flash — benchmark figures copied verbatim from the launched model's Z.ai-published table, so cross-read with `../glm-5.3-flash/Fledge_Alpha.md`.
- Future sources: add a new file next to this one using the same headings.
