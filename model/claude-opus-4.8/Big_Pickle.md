# Claude Opus 4.8 — findings by Big Pickle

- Source: Anthropic (`claude-opus-4.8`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** The May 2026 GA upgrade of Anthropic's Opus flagship — a stronger coding/agentic Opus with an honesty push ("4x less likely to let its own code flaws pass unremarked"), dynamic-workflow subagent coordination, and a fast mode. Strongest computer-use/browser-agent model per Anthropic, only model to finish the Super-Agent benchmark end-to-end.
- **Provider / access:** Claude API (`claude-opus-4-8`), Claude Code, AWS Bedrock, Google Vertex AI, Microsoft Foundry, Azure.
- **Release / knowledge:** 2026-05-28 (42 days after Opus 4.7).
- **IDs:** `claude-opus-4-8` / `claude-opus-4.8` (Anthropic; proprietary).
- **Context window:** 1M tokens; max output 128K (300K in beta), per benchr/opper.
- **Modalities:** text, image, PDF/file inputs; text output; reasoning, tools, structured output.
- **Pricing (as of 2026-09-20):** $5.00 in / $25.00 out per 1M; cached input $0.50; fast mode $10/$50 (3x cheaper than the prior fast-mode price). Batch $2.50/$12.50 per 1M.
- **Architecture:** Proprietary Claude hybrid-reasoning transformer (undisclosed); dynamic multi-subagent workflows.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.4%** (Anthropic; vs GPT-5.5 78.7%, Gemini 3.1 Pro 76.2%, Opus 4.7 82.8%).
- Terminal-Bench 2.1: **74.6%** (Anthropic; improves on 4.7's 66.1%, trails GPT-5.5's 78.2%). benchr board: Terminal-Bench 2.0 74.6%, Terminal-Bench 3.0 21.1%.
- MCP Atlas: **82.2%**; BrowseComp: **84.3%**; DeepSearchQA: **93.1%** (benchr evidence ledger).
- GDPval-AA: **1,890** — leads Opus 4.7 (1,753), GPT-5.5 (1,769), Gemini 3.1 Pro (1,314) (Anthropic/wandb).
- Finance Agent v2: **53.9%** (narrowly ahead of Opus 4.7 51.5% and GPT-5.5 51.8%; Gemini 3.5 Flash reported 57.9%).
- Online-Mind2Web: **84%** (Anthropic — strongest computer-use/browser-agent tested); Legal Agent Benchmark: first model to break 10% all-pass.
- Super-Agent benchmark: only model to complete every case end-to-end (beating prior Opus and GPT-5.5 at parity on cost).
- PinchBench (OpenClaw): **90.5% avg, #4/50** official models with cost per run ~$81.79 (kilo.ai).

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (benchr vs Gemini 3.1 Pro 94.3% — effectively tied).
- ARC-AGI-2: **not published** (benchr note); AA Intelligence Index / LCR: **73.0%** long-context reasoning (kilo); IFBench 62.2% (AA).
- HLE: not surfaced in compared rows.

Coding:

- SWE-bench Verified: **88.6%** (Anthropic, consistent across LLM Stats and independent trackers).
- SWE-bench Pro: **69.2%** — leads Opus 4.7 (64.3%), GPT-5.5 (58.6%), Gemini 3.1 Pro (54.2%).
- SWE-bench Multilingual: **84.4%** (Anthropic).
- AA Coding Index: **74.3%**; SciCode: 53.5%; TerminalBench Hard: 58.3% (kilo/AA).
- Kilo "Kilo Bench" Terminal-Bench 2.0: 67.6% completion.
- Frontend apps per Anthropic post: strong CursorBench-class claims without an independent row captured here.

Long context:

- 1M window, 128K output (300K beta); LCR 73.0% (AA/kilo); strong context-management across long agent sessions (dynamic workflows/parallel subagents).

Multimodal:

- text/image/PDF inputs; computer-use and browser-agent strength (Online-Mind2Web 84%); no audio/video input listed for standard API.

### Normalized scores (1–100)

- **Tool use: 87/100.** OSWorld 83.4%, MCP Atlas 82.2%, GDPval 1,890, Mind2Web 84% — an elite agentic tier; Trail below Fable-5.1-class in the later gen.
- **Reasoning: 87/100.** GPQA 93.6% is top-tier; no ARC-AGI-2/HLE publication keeps it one notch under the anthropic 5.x flagships.
- **Context window: 84/100.** 1M / 128K with LCR 73.0% and dynamic subagent coordination; no MRCR-ranked row surfaced.
- **Multimodal: 82/100.** Strong computer-use vision grounding; standard text/image/file intake without audio/video.
- **Coding: 88/100.** SWE-bench Verified 88.6% and SWE-bench Pro 69.2% are exceptional — the model Anthropic tuned specifically for coding accuracy; Terminal-Bench 2.1 trails GPT-5.5.
- **Cost efficiency: 78/100.** $5/$25 with $0.50 cache — premium but flat across the Opus generation; fast mode at $10/$50 is workable.
- **Overall Score: 86/100.** Mean of the five quality dims (87+87+84+82+88)/5 = 85.6 → 86. The strongest pre-Fable Opus 4.x — a coding/agentus workhorse whose only real competition in its bracket was GPT-5.5 and the soon-to-come Claude 5 line.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (Anthropic announcement/system card, benchr comparison, wandb/ml-news scores table, opper/kilocat listing, tech-insider cross-eval, benchlm evidence ledger); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.