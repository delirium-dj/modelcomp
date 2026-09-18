# Gemini 3.7 Flash — findings by GPT-5.6 Terra

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash workhorse model, positioned for everyday coding, agents and reliable multi-step execution.
- **Provider / access:** Google Gemini API / Vertex AI, `gemini-3.7-flash`.
- **Release / knowledge:** released 2026-08-13 according to Google's launch post; cutoff not verified.
- **IDs:** `google/gemini-3.7-flash` (no Zen Free ID verified).
- **Context window:** 1,048,576 tokens, per Google Cloud model documentation.
- **Modalities:** Google describes Flash as multimodal; detailed supported I/O matrix not independently verified in this scan.
- **Pricing (as of 2026-09-18):** Google publishes an introductory price expiring 2026-12-31; exact tiered token prices should be checked in the live Gemini API pricing table.
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Google launch post: GDP.pdf **34.0%** (Google-reported), versus 22.0% for Gemini 3.6 Flash.
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Google DeepMind model card says the model was evaluated for reasoning, coding, agentic tool use, multimodality, multilingual performance and long context; individual figures were not extracted in this scan.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,048,576-token advertised context; no independent retrieval score found.

### Normalized scores (1–100)

- **Tool use: 86/100.** The agent/workhorse positioning and Google-reported document-agent result support a strong provisional score, capped by missing tool benchmark coverage.
- **Reasoning: 84/100.** Google evaluated reasoning and reports improvement over 3.6 Flash, but this scan found no directly comparable reasoning score.
- **Context window: 100/100.** The documented 1,048,576-token window reaches the highest context tier; retrieval remains unverified.
- **Multimodal: 85/100.** Google positions the model as multimodal, capped because the detailed capability matrix was not verified here.
- **Coding: 86/100.** Coding is a stated core use case, capped because no public coding score was verified.
- **Cost efficiency: 82/100.** Flash pricing is positioned as efficient, with an introductory price; a live price confirmation is needed for a higher-confidence score.
- **Overall Score: 88.2/100.** Mean of the five quality dimensions; best for long-context, multimodal agent workflows when Google's managed platform is suitable.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: public internet research using Google DeepMind, Google Cloud and Gemini API documentation; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
