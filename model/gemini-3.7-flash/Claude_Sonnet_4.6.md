# Gemini 3.7 Flash — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** "Intelligent workhorse" Flash model from Google DeepMind, released August 13, 2026. Designed for coding, agentic workflows, and complex reasoning. Significant leap over Gemini 3.6 Flash on DeepSWE, FrontierCode, AutomationBench, and GPQA Diamond. Released at half the cost of 3.6 Flash. Superseded by Gemini 3.8 Flash on September 2, 2026.
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-3.7-flash`). Active as of 2026-09-17. Gemini API, Chat Completions–style. Supports computer use.
- **Release / knowledge:** 2026-08-13 (blog.google, puter.com). Knowledge cutoff: March 2026 (puter.com).
- **IDs:** `google/gemini-3.7-flash`. No OpenCode Zen Free ID found as of 2026-09-17; scored on paid pricing.
- **Context window:** 1,000,000 tokens input (1M); max output 64,000 tokens (blog.google, puter.com, deepmind.google).
- **Modalities:** Text, image, video, audio, PDF input; text output. Function calling, search as a tool, computer use supported (puter.com, blog.google).
- **Pricing (as of 2026-09-17):** $0.75 / 1M input, $3.75 / 1M output — half the cost of 3.6 Flash at equivalent capability level (blog.google, artificialanalysis.ai, antigravity.google).
- **Architecture:** Proprietary Google DeepMind; foundational intelligence from 3.7 generation; exact params undisclosed.

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **65.3%** (blog.google, puter.com — vs 3.6 Flash's 49.0%)
- FrontierCode 1.1: **43.6%** (blog.google — vs 3.6 Flash's 34.4%)
- AutomationBench: **30.4%** (blog.google — vs 3.6 Flash's 17.0%)
- WebDev Arena (Elo): **1588** (blog.google, mindstudio.ai — vs 3.6 Flash's 1538)
- Terminal-Bench 2.1: **~81.6%** (inferred from 3.8 Flash comparison noting 3.8 scored 90.8% "up from 81.6% in 3.7 Flash")
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (puter.com — confirmed; notable frontier-class reasoning score)
- HLE (Humanity's Last Exam): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Intelligence Index: **no verified public rank found**

Coding:

- DeepSWE v1.1: **65.3%** (confirmed; primary coding evidence)
- FrontierCode 1.1: **43.6%** (confirmed)
- Terminal-Bench 2.1: **~81.6%** (inferred from 3.8 Flash blog comparison)
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks depth-retrieval score found publicly for 3.7 Flash; 1M context confirmed.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 ~81.6% approaching frontier (85%+); AutomationBench 30.4% (moderate); WebDev Arena Elo 1588 (strong); DeepSWE 65.3%; strong multi-benchmark profile; Tau3/GDPval absent; scored 80.
- **Reasoning: 88/100.** GPQA Diamond 94.5% — frontier PHD reasoning (90%+ = 90–100 range); HLE absent prevents 90+; scored 88.
- **Context window: 95/100.** 1M confirmed; no MRCR depth-retrieval data → 95.
- **Multimodal: 82/100.** Text + image + video + audio + PDF in + computer use; no image/audio generation out; computer use pushes toward 85; consistent 82.
- **Coding: 76/100.** DeepSWE 65.3%, FrontierCode 43.6%, TB2.1 ~81.6%; near-frontier coding agent; DeepSWE frontier ref 74%+ = 90–100 not yet met; scored 76.
- **Cost efficiency: 95/100.** $0.75/$3.75 — half the cost of 3.6 Flash at higher capability; per methodology ~$0.60/$2.20=~92 and lower; scores 95.
- **Overall Score: 86/100.** Mean of (80 + 88 + 95 + 82 + 76 + 95) / 6 = 516 / 6 = 86.0 → **86**. Best fit: near-frontier Flash performance with strong reasoning (GPQA 94.5%) and competitive coding; optimal for agentic workflows where cost and speed matter; now superseded by 3.8 Flash.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against blog.google, puter.com, deepmind.google, artificialanalysis.ai, mindstudio.ai, evolink.ai, antigravity.google, miraflow.ai, mean.ceo); scores are normalised 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
