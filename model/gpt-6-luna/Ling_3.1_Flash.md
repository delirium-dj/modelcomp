# GPT-6 Luna — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-6-luna`; API `gpt-6-luna`; OpenAI API, ChatGPT Work, Codex, Azure, Amazon Bedrock, OpenAI Flex/Fast/Batch)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's most efficient GPT-6 tier (2026-09-22; 50% below GPT-5.6 Luna's promotional pricing) — DeepSWE v1.1 66.6% (max, "comparable to Claude Opus 5 and Fable 5 at medium effort" at 93–96% lower cost per task), HLE 38.5%, ARC-AGI-2 59.3%, across a 1.05M context at $0.10/$0.50 per 1M; most Luna-tier evaluation figures were published only for Sol.
- **Provider / access:** OpenAI API (ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu; Free/Go users get GPT-6 Luna in the desktop app; not yet in Chat), Azure, Amazon Bedrock, Batch/Flex at 50%, Fast at 2×. `noFreeId`.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna` / `gpt-6-luna`. NOTE: the repo `meta.json` is vague on pricing ("Paid-tier pricing"); the actual rate is $0.10/$0.50 per 1M.
- **Context window:** 1,050,000 tokens in; 128,000 out.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $0.10/$0.50 per 1M input/output; cached input $0.01/M (10%); cache writes $0.125/M (1.25×); >272K prompts billed 2× input/cache and 1.5× output for the full request; regional +10%; Batch/Flex 50% ($0.05/$0.25); Fast 2× ($0.20/$1.00); blended ~$0.07/M (AA, 7:2:1); 145 tok/s (max).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (OpenAI GPT-6 Sol/Luna launch, 2026-09-22; Luna figures where published):

- DeepSWE v1.1: **66.6%** (max) — "comparable to Claude Opus 5 and Fable 5 at medium effort"; ~93% less per task than Opus 5, ~96% less than Fable 5 (Sol max: 68.8%, within 1.1pp of Fable 5's 69.9%)
- OSWorld 2.0 offline: Luna (max) exceeds GPT-5.6 Sol (medium) at one tenth the cost (Luna's percentage not published; Sol xhigh: 60.5% ≈ Opus 5 medium's 60.3%)
- AutomationBench: Luna figure not published (Sol xhigh: 33.2% at $0.27/task — 9% of Opus 5 max's cost); vendor: Luna (high) improves on its predecessor by 5.4pp at 58% lower cost per task
- Agents' Last Exam: Luna figure not published (Sol max: 56.4%)
- FrontierCode: Luna figure not published (Sol matches Fable 5.1 xhigh at much lower cost)
- LMArena Agent: **1.7%** (#22 of 46, max — weak)
- Community Codexometer (3 executed tasks, 2026-09-22): **3/3 pass** at ~$0.002/task, 14.5–27.4s (GPT-5.6 Luna high failed 1/3)

Reasoning / knowledge (independent, max effort):

- Humanity's Last Exam (AA run): **38.5%** (#91 of 648)
- ARC-AGI-2 (Verified): **59.3%** (#80 of 246); ARC-AGI-3 (Verified): **0.2%** (medium — very weak)
- AA Intelligence Index: **37–38.1** (max; xhigh 34, high 32, medium 29, low 21, non-reasoning 18)
- LMArena Arena text: **1444 Elo** (#85 of 410); Arena coding: **1511** (#53 of 405)
- ModelCap Index: **71.4** (#31 of 280)
- GPQA Diamond, FrontierMath: no verified public score found for Luna

Coding (beyond DeepSWE):

- SWE-bench Pro / Verified, Terminal-Bench 2.1, LiveCodeBench, AA Coding Index: no verified public score found for Luna

Long context / multimodal:

- 1.05M window with 90%-off cached reads; no MRCR/RULER/AA-LCR figure captured
- Factuality (internal, de-identified flagged conversations): Luna at higher effort matches GPT-5.6 Sol at about a hundredth of the cost (percentage not published)

### Normalized scores (1–100)

- **Tool use: 72/100.** DeepSWE v1.1 66.6% (max — "comparable to Claude Opus 5 and Fable 5 at medium effort") and a community Codexometer 3/3 pass lead; LMArena Agent at 1.7% (#22 of 46) is weak, and OSWorld 2.0, AutomationBench and Agents' Last Exam figures for Luna were not published (Sol-only).
- **Reasoning: 73/100.** HLE 38.5% (AA run, max) and ARC-AGI-2 59.3% are near-mid frontier, with the AA Intelligence Index of 37–38.1 (max) and Arena text 1444 supporting; ARC-AGI-3 at 0.2% (medium) is very weak, and no GPQA Diamond or FrontierMath figure was captured for Luna.
- **Context window: 95/100.** 1.05M-token window (128K out) with 90%-off cached reads; no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU figure captured.
- **Coding: 73/100.** DeepSWE v1.1 66.6% (max) and the Arena coding Elo of 1511 (#53 of 405) are mid-strong, with the community Codexometer 3/3 pass supporting; SWE-bench Pro/Verified, Terminal-Bench 2.1, LiveCodeBench and the AA Coding Index for Luna were not published (FrontierCode and Agents' Last Exam figures are Sol-only).
- **Cost efficiency: 96/100.** $0.10/$0.50 per 1M (blended ~$0.18/M at 3:1) with 10%-of-input cache reads ($0.01/M) and half-rate Batch/Flex ($0.05/$0.25) sits just under the ~$0.10/$0.20≈97–99 anchor; the >272K repricing (2× input/cache, 1.5× output) is the caveat, and DeepSWE tasks cost 93–96% less than Opus 5/Fable 5 per task.
- **Overall Score: 76/100.** (72+73+95+65+73)/5 = 75.6 → 76 — a sub-$0.50-output tier with solid DeepSWE (66.6%) and HLE (38.5%) at $0.10/$0.50, held back by unpublished Luna-specific evals, ARC-AGI-3 (0.2%) and LMArena Agent (1.7%).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI GPT-6 Sol/Luna launch, OpenAI API docs, Artificial Analysis, ModelCap, OpenAI Developer Community); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna.md`, using the same headings.
