# Gemini 3.7 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (google/gemini-3.7-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's capable Flash model for coding and agents, predecessor to 3.8 Flash, with strong agentic performance at low cost.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI
- **Release / knowledge:** Released August 13, 2026; knowledge cutoff March 2026
- **IDs:** google/gemini-3.7-flash
- **Context window:** 1,048,576 tokens (1M), 65,536 max output
- **Modalities:** Text, image, video, audio, PDF input; text output
- **Pricing (as of 2026-09-23):** Introductory $0.75/1M input, $3.75/1M output (through Dec 31, 2026); $1.50/$7.50 from Jan 1, 2027
- **Architecture:** Transformer-based, thinking levels (low, medium, high; default medium); code execution, function calling, tool use, computer use, search grounding, file search.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **85.8%** (llm-stats.com leaderboard, #9) or **81.6%** (DataCamp)
- DeepSWE v1.1: **65.3%** (Google DeepMind / CometAPI)
- SWE-Bench Pro: **60.4%** (DataCamp)
- Terminal-Bench 4.0: **11.2%** (tbench.ai)
- SWE-Atlas: **48.0%** (DataCamp)

Reasoning / knowledge:
- GPQA Diamond: **85%** (lmMarketCap)
- HLE: **35%** (lmMarketCap)
- MMLU: **93%** (lmMarketCap)
- MMLU-Pro: **84.5%** (lmMarketCap)
- LiveCodeBench: **76%** (lmMarketCap)
- Intelligence Index: no verified public score found for 3.7 Flash specifically

Coding:
- SWE-bench Verified: **75%** (lmMarketCap)
- SWE-Bench Pro: **60.4%**
- Terminal-Bench 2.1: **85.8%**
- DeepSWE v1.1: **65.3%**

Long context:
- 1M token context window with caching; 64K output limit

### Normalized scores (1-100)

- **Tool use: 88.0/100.** Terminal-Bench 2.1 at 85.8% (llm-stats leaderboard, #9); DeepSWE v1.1 at 65.3%; strong terminal agentic performance for a Flash-class model.
- **Reasoning: 82.5/100.** GPQA Diamond at 85%; MMLU-Pro at 84.5%; HLE at 35%. Strong scientific reasoning but not as elite as Pro-class models.
- **Context window: 97.0/100.** 1M-token context window; standard across the Gemini 3.x Flash family.
- **Multimodal: 92.0/100.** Supports text, image, video, audio, and PDF input; text output only. Strong multimodal capabilities including spatial/multimodal reasoning.
- **Coding: 89.0/100.** Terminal-Bench 2.1 at 85.8%; SWE-bench Verified at 75%; DeepSWE v1.1 at 65.3%; SWE-Bench Pro at 60.4%. Strong coding agent performance.

- **Cost efficiency: 50/100.** Standard pricing varies by provider.
- - **Overall Score: 90/100.** Mean of five non-cost dimensions: (88.0+82.5+97.0+92.0+89.0)/5 = 90.

---

## Signature

- Provided by: **Ling 3.0 (google/gemini-3.7-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/gemini-3.7-flash/Ling_3.0.md.
3. Signature block filled in; relative links resolve from model/gemini-3.7-flash/.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks → save as Ling_3.0.md.excluded.
