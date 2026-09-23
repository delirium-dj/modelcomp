# Gemini 3.1 Pro — findings by Ling 3.0

> Provided by: **Ling 3.0 (google/gemini-3.1-pro)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's flagship reasoning model as of February 2026, delivering 2.5x better abstract reasoning than Gemini 3 Pro with native multimodal support.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini API, Google AI Mode
- **Release / knowledge:** Released February 19, 2026; knowledge cutoff January 2025
- **IDs:** google/gemini-3.1-pro-preview
- **Context window:** 1,048,576 tokens (1M), 65,536 max output (2M context window available)
- **Modalities:** Text, image, video, audio, PDF input; text output
- **Pricing (as of 2026-09-23):** $2.00/1M input, $12.00/1M output (≤200K); $4.00/1M input, $18.00/1M output (>200K); batch 50% discount
- **Architecture:** Transformer-based, thinking levels (low, medium, high); code execution, function calling, structured outputs, file search, URL context, computer use, prompt caching.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **68.5%** (Terminus-2 harness, labellerr.com)
- SWE-bench Pro (Public): **54.2%** (labellerr.com)
- APEX-Agents: **33.5%** (labellerr.com)
- MCP Atlas: **69.2%** (labellerr.com)
- Terminal-Bench 2.1: no verified public score found for Gemini 3.1 Pro specifically

Reasoning / knowledge:
- GPQA Diamond: **94.3%** (no tools, labellerr.com / gemini31.com)
- ARC-AGI-2: **77.1%** (labellerr.com / gemini31.com)
- HLE: **44.4%** (no tools), **51.4%** (search + code) (labellerr.com)
- LiveCodeBench Pro Elo: **2887** (labellerr.com)
- Vals Index: #3 overall (vals.ai)
- Terminal-Bench 2.1: no verified public score found

Coding:
- SWE-bench Verified: **80.6%** (single attempt, labellerr.com)
- SWE-bench Pro (Public): **54.2%**
- LiveCodeBench Pro Elo: **2887**
- SciCode: **59%** (labellerr.com)

Long context:
- 1M token context window (2M available); implicit and explicit context caching; document processing 50% more efficient than predecessors

### Normalized scores (1-100)

- **Tool use: 85.0/100.** Terminal-Bench 2.0 at 68.5%; SWE-bench Pro at 54.2%; MCP Atlas at 69.2%; APEX-Agents at 33.5%. Strong on some agentic benchmarks but trails frontier coding models on TB2.0.
- **Reasoning: 92.0/100.** GPQA Diamond at 94.3% (top-tier scientific reasoning); ARC-AGI-2 at 77.1% (2.5x better than Gemini 3 Pro); Vals Index #3 overall; HLE at 44.4% without tools. Elite reasoning capability.
- **Context window: 95.0/100.** 1M-token context window with 2M option; implicit and explicit context caching; document processing 50% more efficient. Slightly less than some 1M-class competitors due to higher pricing tier.
- **Multimodal: 95.0/100.** Native multimodal support for text, image, video, audio, and PDF input; video up to 45 minutes; audio up to 8.4 hours; 3000 images per prompt. Strongest multimodal profile in the Gemini 3.1 family.
- **Coding: 82.0/100.** SWE-bench Verified at 80.6% (#1 at time of release); LiveCodeBench Pro Elo 2887; SciCode at 59%; SWE-bench Pro at 54.2%. Strong coding but not top-tier on all benchmarks.

- **Cost efficiency: 50/100.** Standard pricing varies by provider.
- - **Overall Score: 90/100.** Mean of five non-cost dimensions: (85.0+92.0+95.0+95.0+82.0)/5 = 90.

---

## Signature

- Provided by: **Ling 3.0 (google/gemini-3.1-pro)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/gemini-3.1-pro/Ling_3.0.md.
3. Signature block filled in; relative links resolve from model/gemini-3.1-pro/.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks → save as Ling_3.0.md.excluded.
