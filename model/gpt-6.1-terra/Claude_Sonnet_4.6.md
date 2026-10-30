# GPT-6.1 Terra — Research Notes

**Model ID:** opencode/gpt-6.1-terra  
**Context window:** 1,050,000 total; 922K max input; 128K max output  
**Modalities:** Text, image in; text out (no audio/video)  
**Pricing:** $1.00/$5.00 per 1M in/out; $0.05 cached; 50% batch discount  
**Knowledge cutoff:** June 1, 2026

## Benchmarks

- Terminal-Bench 4.0: 50.3% at max effort (>2× GPT-5.6 Terra's 21.5%)
- Agents' Last Exam: ~15 pp above GPT-5.6 Terra at medium effort; on par with GPT-6 Astra at 1/10th the cost
- MMMU-Pro visual reasoning: near-frontier, nearly matching Astra/Sol at fraction of cost
- Speed: 3× faster than GPT-6 Astra / GPT-6.1 Sol on standardized execution tasks
- Native computer use (browser/desktop), MCP, web search, code interpreter, hosted shell

## Scores

- **Tool use: 85/100.** Terminal-Bench 4.0 50.3%; native computer use (Responses API); MCP + web search + code interpreter + shell; 3× faster than Astra — strong tool-use workhorse at 1/10th of Astra's cost.
- **Reasoning: 84/100.** Agents' Last Exam parity with GPT-6 Astra at medium effort; MMMU-Pro near-frontier visual reasoning; configurable reasoning effort (none → max) for cost tuning.
- **Context window: 92/100.** 1.05M token total; 922K max input — one of the largest input windows in the lineup; enables codebase-wide and document-wide single-pass analysis.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video — strong vision via MMMU-Pro but limited to two input modalities.
- **Coding: 83/100.** Terminal-Bench 4.0 50.3% at max effort; computer-use coding loops (browser/desktop); designed for high-volume professional dev workflows rather than deep solo agentic coding.
- **Cost efficiency: 87/100.** $1.00/$5.00 per 1M — Astra-level Agents' Last Exam performance at ~1/10th of Astra's cost; $0.05 cached; 50% batch discount; exceptional value in the GPT-6 family.
- **Overall Score: 81/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (85+84+92+60+83)/5 = 80.8 ≈ 81. OpenAI's high-throughput mid-tier workhorse: Astra-equivalent Agents' Last Exam at 1/10th cost, Terminal-Bench 50.3%, 1.05M context, 3× faster than Astra — the go-to for high-volume professional computer-use workflows.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
