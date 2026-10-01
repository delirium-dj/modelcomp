# Big Pickle — findings by DeepSeek 4 Flash

- Source: Stealth/Big Pickle (community consensus: GLM-4.6)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). Roughly Sonnet-class coding at zero token cost during the free period.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), Chat Completions; text-only.
- **Release / knowledge:** stealth release; backing model GLM-4.6 (knowledge cutoff not publicly disclosed).
- **IDs:** `opencode/big-pickle`
- **Context window:** 200K total (160K in / 32K out) — Zen/models.dev specs.
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** Free Zen tier; paid GLM-4.6 equivalent ~$0.60/$2.20 per 1M.
- **Architecture:** stealth vendor undisclosed; consensus GLM-4.6 MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **49.4%** (BenchmarkList proxy)
- Tau3 **10.5%**; GDPval **934 Elo** (BenchmarkList proxy)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **63.2%** (BenchLM `glm-4-6` proxy)
- HLE **5.5%**; AA-LCR **28.3%** (GLM-4.6 proxy)
- BenchLM GLM-4.6 overall **53.94/100** (#107/411)

Coding:

- SWE-Atlas direct eval **50.8%** (63/124); LiveCodeBench **81.0%**
- SciCode **38.4%**; Vibe Code Bench **3.1%** (GLM-4.6 proxy)

Long context:

- AA-LCR 28.3%

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 55/100.** TB 2.1 49.4% and GDPval 934 are mid; Tau3 10.5% is weak.
- **Reasoning: 50/100.** GPQA 63.2% is mid; HLE 5.5% and LCR 28.3% are weak.
- **Context window: 70/100.** 200K (160K in / 32K out).
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 68/100.** SWE-Atlas 50.8% and LiveCode 81% are decent; SciCode 38.4% and Vibe 3.1% trail.
- **Cost efficiency: 100/100.** $0 on the evaluated Zen free tier.
- **Overall Score: 52/100.** Mean of (55 + 50 + 70 + 15 + 68) / 5 = 51.6 → 52. Best-fit: zero-cost daily driver; escalate for hard reasoning/1M-context jobs.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (OpenCode Zen specs, BenchmarkList/BenchLM GLM-4.6 proxy, SWE-Atlas direct eval); scores are normalized 1–100 interpretations, not official vendor scores. Backing model is stealth — verify if swapped.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
