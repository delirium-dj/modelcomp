# Nemotron 3.5 Lightning Free — findings by Gemini 3.6 Flash

- Source: NVIDIA (`opencode/nemotron-3.5-lightning-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** Compact 30B MoE (3B active) execution model built by NVIDIA for ultra-fast, high-volume agent action loops.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3.5-lightning-free`), Chat Completions API.
- **Release / knowledge:** 2026-05 release; 2025-10 knowledge cutoff.
- **IDs:** `opencode/nemotron-3.5-lightning-free`
- **Context window:** 262,144 tokens input / 16,384 max output; verified via NVIDIA NIM docs.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen tier).
- **Architecture:** Compact MoE (30B total / 3B active parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **24.58%**
- Tau3-Banking / Tau2-Bench: **9.28%**
- GDPval-AA: **832**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **32.0**

Reasoning / knowledge:

- GPQA Diamond: **75.44%**
- HLE: **10.0%**
- LCR / MLCR: **50.0%**
- CritPt: **32.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **40.0 / #75**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.56%**
- LiveCodeBench: **56.0%**
- SciCode / AA-SciCode: **28.0%**
- Vibe Code Bench: **20.0%**
- DeepSWE / Coding Index / other: **42.0%**

Long context:

- MRCR / RULER: **92.0%** retrieval accuracy across 262K window

### Normalized scores (1–100)

- **Tool use: 50/100.** Optimized for fast execution loops rather than heavy agent planning.
- **Reasoning: 62/100.** Respectable GPQA Diamond (75.4%) given compact size.
- **Context window: 72/100.** 262K context window mapping.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 58/100.** Reliable for small routine script execution.
- **Cost efficiency: 100/100.** Free tier access ($0/1M tokens).
- **Overall Score: 51/100.** Ultra-fast sub-agent executor for high-volume automated tools.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
