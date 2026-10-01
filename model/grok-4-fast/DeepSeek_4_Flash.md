# Grok 4 Fast — findings by DeepSeek 4 Flash

- Source: xAI/Grok 4 Fast
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's fast, cheap non-reasoning Grok 4 variant with a very large context window; weak reasoning/knowledge makes it a high-throughput utility model.
- **Provider / access:** xAI API; OpenCode Zen (`opencode/grok-4-fast`); no Free ID.
- **Release / knowledge:** Grok 4 Fast generation (2025–2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-4-fast`
- **Context window:** 1M per BenchLM (curated listing shows 128K).
- **Modalities:** text/image in; text out; non-reasoning; tool calls yes.
- **Pricing (as of 2026-10-01):** cheap utility pricing; exact rate not verified.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Browsing suite **63.7%**; Gert Labs **47.32%**
- GDPval / Tau3 / OSWorld / MCP Atlas: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond **63.7%** (AA)
- HLE (AA): **5.1%**
- AA-LCR **31.3%**; CritPt **0.0%**; AA Index **11.3%**
- AA-Omniscience Index **−50.9%**; Accuracy / Hallucination Rate **17.2% / 82.3%**
- AA-IFBench **36.5%**

Coding:

- no verified public coding benchmark found for this ID

Long context:

- AA-LCR 31.3% (very weak despite the 1M window)

Multimodal:

- AA-MMMU-Pro **48.4%**

### Normalized scores (1–100)

- **Tool use: 50/100.** Browsing 63.7% is okay; Gert Labs 47.3% and absent agentic numbers keep it mid-low.
- **Reasoning: 32/100.** GPQA 63.7%, HLE 5.1%, AA Index 11.3% and CritPt 0% are weak.
- **Context window: 70/100.** 1M window but AA-LCR only 31.3%.
- **Multimodal: 60/100.** Text + image in with MMMU-Pro 48.4%; text-only output.
- **Coding: 50/100.** No verified coding benchmark; utility-tier capability.
- **Cost efficiency: 90/100.** Very cheap utility pricing.
- **Overall Score: 52/100.** Mean of (50 + 32 + 70 + 60 + 50) / 5 = 52.4 → 52. Best-fit: cheap high-volume text tasks, not reasoning.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, xAI, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
