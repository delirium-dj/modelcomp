# GPT-6 Luna — findings by Kimi K3

- Source: OpenAI / GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's lightest GPT-6 variant (siblings Astra/Sol), launched Sep 22, 2026 as "our most efficient model for focused, high-volume tasks" at 50% cheaper than GPT-5.6 Luna (openai.com/index/introducing-gpt-6-sol-and-luna).
- **Provider / access:** OpenAI API (`gpt-6-luna`, Chat Completions + Responses; Batch); ChatGPT Work/Codex all paid tiers; Free and Go users via desktop app (openai.com).
- **Release / knowledge:** Released 2026-09-22 (openai.com); knowledge cutoff May 18, 2026 (developers.openai.com).
- **IDs:** `openai/gpt-6-luna` (no Zen Free ID verified).
- **Context window:** 1,050,000 tokens (max input 922K) / 128K max output (developers.openai.com); >272K input priced higher.
- **Modalities:** text/image in; text out; reasoning (`none`–`max` effort); function calling, structured outputs, prompt caching, web/file search, computer use (developers.openai.com).
- **Pricing (as of 2026-09-29):** $0.10/M input, $0.50/M output, $0.01/M cached input, $0.125/M cache writes; prompts >272K input billed at 2x input/cache and 1.5x output; Batch/Flex 50% (developers.openai.com).
- **Architecture:** proprietary (OpenAI).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **43.4%** normalized (benchlm.ai)
- GDP.pdf (all-pass): **20.4%**; ExploitGym: **11.6%** (benchlm.ai)
- OSWorld 2.0: exceeds GPT-5.6 Sol (medium) at max effort at one tenth the cost — exact figure chart-only (openai.com)
- AutomationBench (high): +5.4 pts over GPT-5.6 Luna at 58% lower cost/task — exact figure chart-only (openai.com)
- Terminal-Bench / Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA-LCR: **83.3%**; CritPt: **19.4%** (benchlm.ai)
- ARC-AGI-1: **86.7%**; ARC-AGI-2: **59.3%**; ARC-AGI-3: **0.1%** (benchlm.ai)
- AA-HLE: **38.5%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **37.3**; BenchLM overall **66.59/100, #22 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **43.8% / 76.7%** (benchlm.ai)
- Internal factuality: at higher effort matches GPT-5.6 Sol at ~1/100 the cost (openai.com)
- GPQA: no verified public score found

Coding:

- DeepSWE v1.1 (max): **66.6%** — comparable to Claude Opus 5 / Fable 5 at medium, at 93–96% lower cost/task (openai.com)
- AA-SciCode: **54.6%** (benchlm.ai)
- SWE-bench / LiveCodeBench / AA Coding Index: no verified public score found

Long context:

- AA-LCR 83.3% at the 1.05M window (benchlm.ai); no MRCR/RULER rows found for GPT-6 Luna.

Multimodal:

- AA-MMMU-Pro: **75.5%** (benchlm.ai); official docs confirm image input, text-only output (developers.openai.com)

### Normalized scores (1–100)

- **Tool use: 60/100.** GDPval 43.4% and chart-only OSWorld/AutomationBench gains are the main signals; capped by missing Terminal-Bench/Tau/OSWorld numbers.
- **Reasoning: 78/100.** LCR 83.3%, ARC-AGI-2 59.3%, AA Index 37.3; capped by CritPt 19.4% and ARC-AGI-3 0.1%.
- **Context window: 88/100.** Verified 1.05M window (922K max input, 128K output) with LCR 83.3%; capped by missing max-window retrieval probes.
- **Multimodal: 72/100.** Upper image-in/text-out band: MMMU-Pro 75.5% vision input; no audio/video input; text-only output.
- **Coding: 70/100.** DeepSWE 66.6% (max) is strong for the price tier; capped by absence of SWE-bench/LiveCodeBench rows and SciCode 54.6%.
- **Cost efficiency: 98/100.** Verified $0.10/$0.50 per 1M (97–99 band) — among the cheapest frontier-family models; 90% cache-read discount stacks further.
- **Overall Score: 73.6/100.** Mean of the five quality dims (60+78+88+72+70)/5 = 73.6. Best fit: entry GPT-6 access for long-context chat, high-volume tasks, and moderate coding; agentic depth should use Sol/Astra.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, developers.openai.com docs, openai.com announcements); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: verified release 2026-09-22, pricing $0.10/$0.50 + >272K tier, 1.05M/922K/128K window, cutoff May 18 2026 via developers.openai.com; added official rows (DeepSWE 66.6% max, chart-only OSWorld/AutomationBench gains, factuality claim); Context 86→88, Cost 80→98 per band rules; Overall 73→73.6.
- Future sources: add a new file next to this one using the same headings.
