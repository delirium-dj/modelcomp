# GLM 5.3 — findings by Qwen 3.8 27B

- Source: Z.ai (`glm-5.3`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's open-weight frontier coding flagship (Aug 2026), "Frontier Coding with Emergent Cyber Capabilities"; long-horizon engineering + security workloads.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3` on `https://opencode.ai/zen/v1/chat/completions` (verified in opencode.ai/docs/zen + Zen model list, 2026-09-28); Z.ai API; open weights HF `zai-org/GLM-5.3`. No Zen Free ID for this id (`glm-5.3-flash` and a separate free route exist — distinct entries).
- **Release / knowledge:** released 2026-08-14 (Z.ai blog "GLM-5.3: Frontier Coding with Emergent Cyber Capabilities"); knowledge cutoff not disclosed.
- **IDs:** `opencode/glm-5.3` (Zen, confirmed in Zen model list); `zai-org/GLM-5.3` (Hugging Face).
- **Context window:** 1M total (BenchLM / Z.ai docs); max-output split not independently verified.
- **Modalities:** text in / text out; reasoning yes; tool calls yes (TB2.1 88.2%, Tau3, Toolathlon verified). No image/audio input found — text-only.
- **Pricing (as of 2026-09-29):** $1.40 in / $4.40 out / $0.26 cached in per 1M (OpenCode Zen price table, 2026-09-28).
- **Architecture:** open weights (Z.ai GLM-5.3; exact param configuration not verified in this pass).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (BenchLM 2026-09-28; Vals 71.5%, AA harness 83.9%); TB3 **28.3%**; TB4.0 **41.9%**
- Tau3-Banking / Tau2-Bench: AA Tau3 Banking **50.3%** (BenchLM)
- GDPval-AA: **1769** (**57.2%** normalized) (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified **73.0%** (BenchLM)
- CyberGym **84.5%**; ExploitGym **15.0%**; HLE w/ tools **62.5%**; AA Briefcase Elo **1517**; AA Agentic Index **53.4%**; AA ITBench **46.1%**; AA EnterpriseOps-Gym **36.4%**; AutomationBench **48.2%** (AA 62.2%); Agents' Last Exam **28.5%**; GDP.pdf **11.2%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA, via BenchLM; Vals 88.1%)
- HLE: **42.3%** (AA-HLE via BenchLM)
- LCR / MLCR: LCR **79.7%**; MLCR-AA **48.3%** (BenchLM/AA)
- CritPt: **19.1%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **44.8** / **65.44 (#29 of 512)**
- Omniscience Accuracy / Hallucination Rate: **33.9% / 29.6%** (AA via BenchLM); MMLU-Pro (Vals) **86.8%**

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench (Vals) **95.4%** (BenchLM) — SWE-Pro not listed for 5.3
- LiveCodeBench: **80.5%** (Vals, BenchLM)
- SciCode / AA-SciCode: **59.0%** (BenchLM/AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **74.8%**; DeepSWE **66.9%**; FrontierSWE **78.1%**; FrontierSWE v2 **30.2%**; sweMarathon **42.5%**; VulcanBench v3 **78.3%**; NL2Repo **58%**; OpenHarmony **60.8%**; ProgramBench **19.0%**; PostTrain Bench **39.8%** (BenchLM)

Long context:

- 1M window; no dedicated retrieval benchmark at window length found beyond AA-LCR 79.7%.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.2% inside the frontier band, GDPval-AA 1769 at the ~1750+ frontier level and Tau3 50.3% at the frontier threshold; capped just short of 95 by ALE 28.5% and ExploitGym 15.0%.
- **Reasoning: 84/100.** GPQA 91.7% and HLE 42.3% clear the 90%+ / 40%+ frontier references; capped by CritPt 19.1% and AA Index 44.8 (below the 60+ frontier reference).
- **Context window: 95/100.** 1M window in the >=1M tier (95–100); no verified >=98% retrieval at 512K+ to justify 100.
- **Multimodal: 15/100.** Text-only input (no image/audio found in any source) → text-only floor tier.
- **Coding: 88/100.** SWE-bench 95.4% (Vals), Coding Index 74.8 (>70 frontier ref), SciCode 59.0% (>55%) and FrontierSWE 78.1%; capped just under 90 by DeepSWE 66.9% and FrontierSWE v2 30.2%.
- **Cost efficiency: 87/100.** $1.40/$4.40 per 1M (Zen, 2026-09-28) sits just above the ~$1.25/$4.25 = ~88 reference point.
- **Overall Score: 75/100.** (92 + 84 + 95 + 15 + 88) / 5 = 74.8 → 75. Best fit: top open-weights frontier coding/cyber agent at 1M context; text-only is the main limitation.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (BenchLM, Z.ai blog, OpenCode Zen docs + price table + model list, Hugging Face model card link); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
