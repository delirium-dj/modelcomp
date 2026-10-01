# GPT-6.1 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6.1 Sol (`openai/gpt-6.1-sol`; repo catalogue id `opencode/gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (OpenAI GPT-6 family, mid-cost tier; paid API only, no "Free" wording)
- **Short description:** OpenAI's mid-tier GPT-6 reasoning model, shipped at DevDay on 2026-09-29 as a point upgrade to GPT-6 Sol. Marketed as near-flagship (GPT-6 Astra) quality on agentic coding, computer use and professional knowledge work at roughly a fifth of Astra's standard token price. Not an alias of GPT-6 Sol — distinct API id, cheaper cache reads, and the "none" reasoning tier is unsupported.
- **Provider / access:** OpenAI API as `gpt-6.1-sol` (Responses, Chat Completions and Batch endpoints); also surfaced in ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu. Not available in standard ChatGPT chat. An "Ultrafast" (up to 8× generation) variant is announced but unpriced.
- **Release / knowledge:** Released 2026-09-29 at OpenAI DevDay; knowledge cutoff April 2026.
- **IDs:** `openai/gpt-6.1-sol` (this repo's `meta.json` uses `opencode/gpt-6.1-sol`). No OpenCode Zen Free ID is documented — paid API only.
- **Context window:** 1,050,000 input tokens (≈922K usable before repricing) and 128,000 max output tokens (LLM-Stats/HokAI catalogue, checked 2026-09-30). Any prompt over 272K input tokens reprices the whole request.
- **Modalities:** text and image in, text out; reasoning model with five effort levels (low, medium, high, xhigh, max; "none" unsupported); tool calls and structured output. No audio or video input; no fine-tuning.
- **Pricing (as of 2026-09-30):** $2.00 / 1M input, $10.00 / 1M output, $0.10 / 1M cached input, $2.50 / 1M cache write (OpenAI list). Batch and Flex are 50% cheaper; Fast mode is 2×. Blended ≈$1.47 / 1M (Artificial Analysis). Paid only.
- **Architecture:** proprietary; OpenAI publishes no parameter count or architecture. Zero-data-retention option available.

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6 (medium effort): **2.2 points above Claude Opus 5.5** (OpenAI, vendor-reported)
- OSWorld 2.0 offline (max effort): **2.1 points behind GPT-6 Astra, 7 points above GPT-6 Sol** (OpenAI, vendor-reported)
- Terminal-Bench Science 0.1: **$5.47/task at max effort** vs $23.21 Opus 5.5 and $23.80 Astra; Astra holds the top score at 68.1% (OpenAI)
- Coding Agent Index (xhigh effort): **1 point above GPT-6 Astra** at <15% of Astra's per-task cost (Artificial Analysis, independent)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (max effort): **52** — 1 point behind GPT-6 Astra and 6 behind Claude Opus 5.5 (58) (Artificial Analysis, 2026-09-30)
- Cost per Intelligence Index task (max effort): **$0.72** vs $3.26 Astra and $1.05 GPT-6 Sol (Artificial Analysis)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: **no verified public score found**

Coding:

- DeepSWE v1.1 (high effort): **75.2%** — above GPT-6 Astra's best run of 74.1%, at $0.65/task vs $4.43 (OpenAI, vendor-reported)
- DeepSWE v1.1 (xhigh / max): **71.9%** (drops from the high-effort peak) (OpenAI)
- DeepSWE v1.1 (low effort): **64.4%** vs GPT-6 Sol's 37.2% at similar cost (OpenAI)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks retrieval accuracy reported at any window length: **no verified public score found**. The 1.05M-token window is catalogue-verified only.

### Normalized scores (1–100)

- **Tool use: 88/100.** The independent Coding Agent Index leads Astra and OpenAI reports AutomationBench above Opus 5.5 with OSWorld 2.0 near Astra; capped below 90 because the strongest agentic claims are vendor-run and no public Tau3/Terminal-Bench 2.1 number exists.
- **Reasoning: 84/100.** AA Intelligence Index 52 trails Opus 5.5 (58) by six points while sitting one point under Astra; strong but second-tier for a flagship-adjacent model, capped by missing GPQA/HLE evidence.
- **Context window: 92/100.** 1.05M-token input and 128K output clear the 1M band; held below 97 by the 272K reprice threshold and unverified long-context retrieval.
- **Multimodal: 55/100.** Text and image input only — no audio or video, so it sits mid-pack for the 2026 multimodal field despite solid document/computer-use vision.
- **Coding: 91/100.** DeepSWE v1.1 75.2% beats Astra's best run at about one-seventh the per-task cost and the coding-agent index leads Astra; capped by vendor-only sourcing on the headline figure.
- **Cost efficiency: 72/100.** $2.00/$10.00 with a $0.10 cache read is mid-price for 2026 (roughly a fifth of Astra, about half of Opus 5.5's per-task cost) but far from the sub-$0.5 open-weight tier.
- **Overall Score: 82/100.** Mean of the five quality dims (88+84+92+55+91)/5 = 82.0. Best-fit: high-volume agentic coding, computer-use and document work where near-Astra quality at mid-tier cost beats absolute peak scores.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (OpenAI launch coverage, HokAI, LLM-Stats, Emergent benchmark breakdown, OrcaRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
