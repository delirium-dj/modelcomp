- Source: OpenAI/GPT-5-Codex
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's September 2025 model specialised for agentic programming, optimised for Codex CLI / IDE extensions / cloud / GitHub review. A distinct model; `gpt-5.1-codex`, `gpt-5.1-codex-max`, `gpt-5.2-codex` and `gpt-5.3-codex` are separate.
- **Provider / access:** Codex CLI, IDE extensions, web and mobile, GitHub code review, cloud sandbox; Microsoft Visual Studio integration with automatic model selection.
- **Release / knowledge:** 2025-09 (API 2025-09-24 per OSCHINA); knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5-codex`. No free Zen ID verified.
- **Context window:** no verified figure in the retrieved pages — no verified public score found.
- **Modalities:** text, screenshot and chart in, text/code out; code generation/correction/explanation/execution, local file read-modify-execute, code review, large-project refactoring. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** standard GPT-5-series pricing (**$1.25 / 1M input, $10 / 1M output**, from OpenAI's official GPT-5 developer page, already fetched) — lineage rate card, not a verified Codex-specific quote.
- **Architecture:** Proprietary, closed weights; GPT-5-based with dynamic thinking-time adjustment (independent work **>7 hours** on large tasks) and multi-agent real-time collaboration / async delegation.

### Raw benchmarks found

Agent / tool use:

- SWE-bench: **74.5%** (Baike GPT-5-CODEX article; the 74.9% figure belongs to **GPT-5 thinking** — different ID, not attributed here)
- Independent autonomous work **>7 hours** on large complex tasks (vendor claim, qualitative)
- Multi-agent real-time collaboration and asynchronous task delegation (qualitative)
- SWE-bench Verified evaluation and large-refactor leadership claimed at launch (directional, no separate number)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench **74.5%** as above; code review, refactoring and critical-defect discovery (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** >7-hour autonomous sessions, multi-agent collaboration/delegation, local file operations and GitHub code review integration; capped by no scored agent harness.
- **Reasoning: 81/100.** Dynamic thinking-time allocation for long tasks; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 83/100.** Long-session (>7h) state handling; capped by no verified token window and no retrieval benchmark.
- **Multimodal: 80/100.** Screenshot and chart input alongside text for code tasks; capped by text/code-only output, no verified audio/video input, and no multimodal benchmark.
- **Coding: 87/100.** SWE-bench 74.5% with code review and large-refactor specialisation; capped by no SWE-bench Verified / Terminal-Bench figure.
- **Cost efficiency: 86/100.** Standard GPT-5-series pricing ($1.25/$10 lineage) and dynamic compute allocation. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 86, 81, 83, 80, 87 = 83.4 → 83. Best fit: long-running agentic software engineering inside Codex/GitHub workflows; superseded by the GPT-5.1/5.2/5.3-Codex line.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5-CODEX article retrieved via public web search excerpt (release, Codex/IDE/GitHub integration, screenshot/chart inputs, local file operations, multi-agent collaboration, 74.5% SWE-bench), the Baidu Baike 智能体编程模型 excerpt for SWE-bench Verified / refactoring claims, and secondary 百家号 / OSCHINA launch coverage for >7-hour autonomy and the API date — labelled secondary. The 74.9% SWE-bench figure belongs to GPT-5 thinking and is explicitly NOT attributed here. Pricing is the standard GPT-5 rate card from OpenAI's official developer page (already fetched), labelled lineage. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [GPT-5-CODEX — 百度百科 (retrieved via search excerpt; specs, 74.5% SWE-bench, integrations)](https://baike.baidu.com/item/GPT-5-CODEX/66766676)
  - [Introducing GPT-5 for developers — OpenAI (lineage pricing, already fetched)](https://openai.com/index/introducing-gpt-5-for-developers/)
