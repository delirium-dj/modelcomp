# Gemini 3.8 Flash — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's current flagship Flash-tier model as of September 2026, released September 2, 2026. Positions as "intelligent workhorse" for long-horizon software engineering, autonomous agents, and complex multi-step reasoning. Significant jump over 3.7 Flash on Terminal-Bench 2.1 (90.8% vs 81.6%) and DeepSWE. Includes configurable thinking levels (Low/Medium/High). An additional Cyber variant exists for cybersecurity workloads (restricted access).
- **Provider / access:** Google AI Studio (`gemini-3.8-flash`) and Vertex AI. Gemini API, Chat Completions–style. Generally available as of 2026-09-02 (google.dev, blog.google).
- **Release / knowledge:** 2026-09-02. Knowledge cutoff not publicly stated.
- **IDs:** `google/gemini-3.8-flash`. No OpenCode Zen Free ID found as of 2026-09-17; scored on paid pricing.
- **Context window:** 1,048,576 tokens input (~1M+); max output 65,536 tokens (confirmed in benchmark summaries).
- **Modalities:** Text, image, video, audio, PDF input; text output. Computer use in addition to function calling, search as tool, file search, Maps/Search grounding. Thinking levels (Low/Medium/High).
- **Pricing (as of 2026-09-17):** Introductory $0.75 / 1M input, $3.75 / 1M output (through Dec 31, 2026); standard $1.50/$7.50 from Jan 1, 2027 (google.dev confirmed).
- **Architecture:** Proprietary Google DeepMind multimodal transformer; built on 3.7 Flash foundational intelligence with optimisations for coding/agent workloads; exact parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (confirmed — vs 3.7 Flash's 81.6%; benchmark source consistent across multiple reports)
- DeepSWE v1.1: **~73.7%** (reported score ~73.7%; vs 3.7 Flash's 65.3%)
- Artificial Analysis Intelligence Index: **59** (aggregated; confirmed from benchmark summary)
- AutomationBench: **no specific 3.8 score found** (3.7 Flash had 30.4%; 3.8 expected higher)
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- HLE-Verified (Humanity's Last Exam): **~54.9%** (confirmed in benchmark summary)
- GPQA Diamond: **no verified public score found** for 3.8 Flash specifically (3.7 Flash had 94.5% — 3.8 expected ~similar or slightly higher)
- CharXiv Reasoning: **86.2%** (Gemini 3.8 Flash at launch, per benchmark comparison showing improvement over 3.5 Flash's 84.2%)
- LCR / MLCR: **no verified public score found**
- Intelligence Index: **59** (same as above — aggregated measure)

Coding:

- Terminal-Bench 2.1: **90.8%** (primary combined agentic/coding evidence)
- DeepSWE v1.1: **~73.7%** (approaching frontier DeepSWE reference 74%+)
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**
- FrontierCode 1.1: **no verified public score found** for 3.8 (3.7 was 43.6%)

Long context:

- 1M+ context confirmed; no MRCR / RULER depth-retrieval study found publicly for 3.8 Flash yet.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 90.8% — at/above frontier ref (85%+ = 90–100 range); DeepSWE 73.7% near-frontier; Tau3/GDPval absent limits from 90+; scored 85.
- **Reasoning: 87/100.** HLE 54.9% — strong (frontier ref HLE 40%+ = 90–100 approached); CharXiv 86.2%; GPQA not directly confirmed but 3.7 was 94.5% (expected similar); Intelligence Index 59; no LCR; scored 87.
- **Context window: 95/100.** 1M+ confirmed; no depth-retrieval percentage published for 3.8 yet → 95.
- **Multimodal: 85/100.** Full multimodal in (text/image/video/audio/PDF) + computer use; Maps/Search grounding; no native audio/image generation; computer use pushes upper range; scored 85.
- **Coding: 83/100.** TB2.1 90.8% frontier; DeepSWE ~73.7% approaching frontier ref 74%+; FrontierCode not published for 3.8; scored 83.
- **Cost efficiency: 95/100.** $0.75/$3.75 introductory (through Dec 2026); per methodology same as 3.7 Flash pricing tier; scored 95.
- **Overall Score: 87/100.** Mean of (85 + 87 + 95 + 85 + 83 + 95) / 6 = 530 / 6 = 88.3 → **88**. Best fit: current best-in-class Flash model as of 2026-09-17; strong across all dimensions; optimal for long-horizon agentic coding at competitive cost; note pricing rises Jan 2027.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against blog.google, google.dev, artificialanalysis.ai, mean.ceo — multiple corroborating sources); scores are normalised 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
