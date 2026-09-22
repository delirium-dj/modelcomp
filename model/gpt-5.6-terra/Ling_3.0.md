# GPT-5.6 Terra — findings by Ling 3.0

> Provided by: **Ling 3.0 (openai/gpt-5.6-terra)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced GPT-5.6 tier for everyday professional work, offering strong intelligence at a fraction of Sol's cost.
- **Provider / access:** OpenAI API, ChatGPT Plus/Pro/Business/Enterprise, Codex, ChatGPT Work
- **Release / knowledge:** Released July 9, 2026; knowledge cutoff February 16, 2026
- **IDs:** openai/gpt-5.6-terra
- **Context window:** 1,050,000 tokens (1.05M), 128K max output
- **Modalities:** Text, image input; text output (image generation, computer use available)
- **Pricing (as of 2026-09-23):** $2/1M input, $12/1M output; cached input $0.2/1M; batch 50% discount; price cut July 30, 2026
- **Architecture:** Transformer-based, reasoning effort (none, low, medium, high, xhigh, max; default medium); computer use, web search, file search, image generation, code interpreter, MCP.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **87.4%** (OpenAI official / anycap.ai)
- Terminal-Bench 2.0: **87.4%** (benchlm.ai leaderboard)
- Terminal-Bench 3.0 (max): **20.8%** (benchlm.ai)
- BrowseComp: **87.5%** (anycap.ai)
- DeepSWE v1.1: **69.6%** (anycap.ai)
- OSWorld 2.0: **50.2%** (anycap.ai)

Reasoning / knowledge:
- GPQA Diamond: **92.9%** (anycap.ai)
- Intelligence Index v4.1: **55.0** (anycap.ai)
- Agents' Last Exam: **50.4%** (anycap.ai)
- ARC-AGI-3: **0.80%** (anycap.ai)
- Coding Index: **77.4** (Artificial Analysis)

Coding:
- SWE-Bench Pro: **63.4%** (llm-stats.com leaderboard #9)
- DeepSWE v1.1: **69.6%** (anycap.ai)
- Coding Index: **77.4** (Artificial Analysis)
- SWE-bench Verified: **no verified public score found** for Terra specifically

Long context:
- 1.05M-token context window; MRCR v2 (1M) at 72.5%; prompts >272K use long-context rates ($20 input, $75 output)

### Normalized scores (1-100)

- **Tool use: 95.0/100.** Terminal-Bench 2.1 at 87.4% and BrowseComp at 87.5% demonstrate strong agentic tool use; DeepSWE v1.1 at 69.6%; strong across terminal and browsing benchmarks.
- **Reasoning: 89.5/100.** GPQA Diamond at 92.9%; Intelligence Index 55.0; Agents' Last Exam 50.4%. Strong scientific reasoning but ARC-AGI-3 at 0.80% indicates a narrower generalization profile than frontier models.
- **Context window: 97.0/100.** 1.05M-token context window; 128K max output; long-context support with 2x rates above 272K; MRCR v2 at 72.5%.
- **Multimodal: 80.0/100.** Text and image input; text output; computer use, web search, file search, image generation, code interpreter, MCP, and tool search built in.
- **Coding: 90.0/100.** SWE-bench Pro at 63.4% (#9); DeepSWE v1.1 at 69.6%; Coding Index 77.4. Strong coding but trails Opus 5 and Fable 5 on SWE-bench Pro.

- **Cost efficiency: 50/100.** Standard pricing varies by provider.
- - **Overall Score: 90/100.** Mean of five non-cost dimensions: (95.0+89.5+97.0+80.0+90.0)/5 = 90.

---

## Signature

- Provided by: **Ling 3.0 (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/gpt-5.6-terra/Ling_3.0.md.
3. Signature block filled in; relative links resolve from model/gpt-5.6-terra/.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks → save as Ling_3.0.md.excluded.
