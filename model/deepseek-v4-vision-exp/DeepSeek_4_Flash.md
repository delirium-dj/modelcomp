# DeepSeek V4 Flash Vision Exp — findings by DeepSeek 4 Flash

- Source: DeepSeek/DeepSeek V4 Flash Vision Exp
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** DeepSeek's experimental native-multimodal vision-language MoE — the V4 Flash 0731 backbone with image/video/PDF vision for UI understanding, chart reasoning and image-to-code; ranks #10 on BenchmarkList's ECI.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4-flash-vision-exp`); OpenCode Zen free tier available; API-only.
- **Release / knowledge:** 2026-08-21; knowledge cutoff not disclosed.
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp`
- **Context window:** 200K — per curated provider metadata; BenchmarkList does not restate the window.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.44 in / $0.014 cached / $1.32 out per 1M (BenchmarkList); free Zen tier available for experimentation.
- **Architecture:** open-weight MoE (V4 Flash family), experimental vision variant.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1675 Elo** (96th percentile, rank 13/340)
- Toolathlon: **75.9%** (rank 8/37); Agents' Last Exam **27.3%**; AutomationBench **38.8%**

Reasoning / knowledge:

- HLE w/ tools: **55.1%** (rank 11/27)
- GPQA Diamond / HLE w/o tools: no verified public score found for this exact variant

Coding:

- Terminal-Bench 2.1: **83.9%** (rank 18/182); NL2Repo **57.7%**; DeepSWE **59.3%**; DeepSWE 1.1 **59.3%**; CyberGym **75.3%**
- BenchmarkList ECI: **145.28**, #10 of 354

Multimodal:

- MMVU (video): **72.7%** (rank 5/46); MVBench **69.4%**; Chartography **64.3%**; CharXiv-R **80.4%**; BabyVision **35.1%**
- OfficeQA Pro (Vision): **57.9%** (ties field leader)

Long context:

- No MRCR/RULER value reported; 200K context per provider metadata

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval-AA 1675 Elo (96th pct) and Toolathlon 75.9% are strong; AutomationBench 38.8% and Agents' Last Exam 27.3% cap it.
- **Reasoning: 82/100.** HLE w/ tools 55.1% and a top-10 ECI imply frontier-adjacent reasoning; no GPQA number keeps it out of the 90s.
- **Context window: 70/100.** 200K input places it in the 200K tier; no retrieval benchmark to raise it.
- **Multimodal: 80/100.** Image + video + PDF in with MMVU 72.7%, CharXiv-R 80.4% and OfficeQA Pro (Vision) 57.9%; text-only output.
- **Coding: 82/100.** Terminal-Bench 2.1 83.9%, CyberGym 75.3% and DeepSWE 59.3% are strong; NL2Repo 57.7% and SWE-Pro absent cap it.
- **Cost efficiency: 94/100.** $0.44 in / $1.32 out per 1M is elite for a multimodal model.
- **Overall Score: 79/100.** Mean of (80 + 82 + 70 + 80 + 82) / 5 = 78.8 → 79. Best-fit: low-cost multimodal agent for UI/chart/document reasoning plus coding.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList, DeepSeek news, provider metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
