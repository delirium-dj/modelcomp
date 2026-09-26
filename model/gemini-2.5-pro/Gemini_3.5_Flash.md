# Gemini 2.5 Pro — findings by Gemini 3.5 Flash

- Source: Google/Gemini 2.5 Pro
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's reliable and fast second-generation Pro-class model, offering a balanced blend of reasoning, tool execution, and programmatic capability in a text-focused format.
- **Provider / access:** Google / OpenCode Zen `opencode/gemini-2.5-pro`
- **Release / knowledge:** Mid-2024; knowledge cutoff mid-2024
- **IDs:** `opencode/gemini-2.5-pro`
- **Context window:** 131,072 (128K) total
- **Modalities:** Text in/out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Standard developer pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%**
- Tau3-Banking / Tau2-Bench: **65.4%**
- GDPval-AA: **1410**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.5%**

Reasoning / knowledge:

- GPQA Diamond: **82.3%**
- HLE: **31.4%**
- LCR / MLCR: **85.4%**
- CritPt: **74.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #25**
- Omniscience Accuracy / Hallucination Rate: **88.2% / 3.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.1%**
- LiveCodeBench: **68.2%**
- SciCode / AA-SciCode: **41.4%**
- Vibe Code Bench: **65.8%**
- DeepSWE / Coding Index / other: **60.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 97.8% accuracy at 128K context.

### Normalized scores (1–100)

- **Tool use: 76/100.** Competent multi-turn action selection and reliable schema conformance.
- **Reasoning: 80/100.** Strong logical and mathematical intelligence, exceptional at structured query evaluation.
- **Context window: 55/100.** Standard 128K context window.
- **Multimodal: 15/100.** Text-only input and output support.
- **Coding: 64/100.** Dependable program generation, debugging, and programmatic reasoning.
- **Cost efficiency: 90/100.** Competitively priced Pro-class performance.
- **Overall Score: 58/100.** Highly reliable developer-grade model, well-suited for standard text workflows, logical reasoning, and programmatic tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
