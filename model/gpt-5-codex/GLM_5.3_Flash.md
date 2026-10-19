# GPT-5-Codex — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** A version of GPT-5 further optimized for agentic coding in OpenAI's Codex environments (CLI, IDE extension, cloud, GitHub). Purpose-built for real-world software engineering: building projects from scratch, features, debugging, large-scale refactors, and trained code review. Not recommended by OpenAI for general-purpose chat.
- **Provider / access:** OpenAI API, model ID `gpt-5-codex` (Responses API only; Chat Completions not supported). Announced Sep 15, 2025 as Codex-surface-only; API access followed on Sep 23, 2025 at the same price as GPT-5. The underlying model snapshot is regularly updated (rolling alias — no pinned sub-snapshot listed).
- **Release / knowledge:** 2025-09-15 (announcement); knowledge cutoff Sep 30, 2024 (official docs).
- **IDs:** `openai/gpt-5-codex` (no Free ID exists on OpenCode Zen — proprietary OpenAI endpoint only).
- **Context window:** 400,000 total tokens; 272,000 max input; 128,000 max output (official OpenAI model docs). CLI additionally supports conversation compaction for long sessions.
- **Modalities:** text + image input (screenshots, wireframes, diagrams); text output; reasoning tokens with dynamic thinking time (adapts effort to task complexity); function calling; structured outputs; web_search tool; prompt caching. Audio/video: no.
- **Pricing (as of 2026-10-19):** $1.25 / $10 per 1M input / output tokens; cached input $0.125 per 1M (official docs) — same as GPT-5. Also bundled in ChatGPT Plus/Pro/Business/Edu/Enterprise Codex usage.
- **Architecture:** proprietary; GPT-5 fine-tuned via reinforcement learning on real-world coding tasks (per the GPT-5-Codex system card addendum), trained for the Codex harness with iterative test-running until passing.

### Raw benchmarks found

Three independent angles cross-checked: OpenAI announcement + system card addendum (vendor), official API model docs (specs/pricing), Simon Willison's launch review (independent; includes the vendor eval-table figures he transcribed). Conflicts: none found between sources; Willison relayed the vendor numbers verbatim. The announcement's SWE-bench Verified table figure is published as an image (text caption confirms all-500-task reporting); treat the exact percentage below as provisional.

Agent / tool use:

- Terminal-Bench 2.0: no verified public score found for this exact model (successor GPT-5.1-Codex later scored 52.8% on it)
- Code refactoring evaluation: **51.3%** at high effort (vendor, OpenAI announcement, relayed independently by Simon Willison; up from 33.9% for GPT-5 high) — proprietary harness, tasks from large repos in Python/Go/OCaml
- Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for this exact model
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: listed on aggregator leaderboards but no extractable per-model value at research time — no verified number found
- Token efficiency: **93.7% fewer tokens than GPT-5** on the bottom 10% of OpenAI employee turns, while spending ~2× longer reasoning on the hardest 10% (vendor, internal traffic data)

Coding:

- SWE-bench Verified (n=500): **~74.5%** (vendor-reported, published in the announcement's eval table as an image — image-only at fetch time, provisional; caption confirms reporting moved from 477 to all 500 tasks)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench / DeepSWE: no verified public score found
- Independent qualitative: code-review comments "less likely to be incorrect or unimportant" (vendor human eval); Theo Browne's review found it surprisingly weak at navigating code with the Codex CLI search tool (independent, YouTube)

Long context:

- 400k window (272k max input); no public MRCR/RULER/GraphWalks retrieval score found; 7+ hour independent agent sessions reported (vendor, internal testing).

### Normalized scores (1–100)

- **Tool use: 76/100.** Purpose-built for the Codex agent harness with web search, MCP, and iterative test validation; dynamic effort allocation is a real agentic advantage. Capped by the independently observed CLI search/navigation weakness and absence of verified public agentic-benchmark rows (Terminal-Bench etc.) for this exact ID.
- **Reasoning: 68/100.** Dynamic thinking shows strong sustained reasoning on hard tasks (2× reasoning time on top-decile turns), but no verified public GPQA/HLE/LCR scores and a Sep 2024 knowledge cutoff cap it below the general-purpose GPT-5.1 family.
- **Context window: 85/100.** 400k total / 272k input / 128k output is top-tier for its generation, plus CLI compaction; capped by missing public long-context retrieval measurements.
- **Multimodal: 45/100.** Image input (screenshots/wireframes) with visual inspection of its own work in Codex Cloud, but text-only output and no verified multimodal benchmark scores.
- **Coding: 80/100.** Vendor-reported SWE-bench Verified ~74.5% (provisional, image-sourced) and a large verified refactoring jump (33.9%→51.3% vs GPT-5) with trained code review; capped by the provisional SWE-bench figure and the successor Codex models already surpassing it.
- **Cost efficiency: 70/100.** $1.25/$10 per 1M is mid-priced, but the adaptive token economy (93.7% fewer tokens on simple turns) and $0.125 cached input make real-world spend notably lower than a flat-effort flagship; heavy long tasks still burn output at $10.
- **Overall Score: 71/100.** Mean of the five non-cost dims (76+68+85+45+80)/5 = 70.8 → 71. Best fit: agentic coding in Codex-like harnesses — refactors, code review, and long autonomous sessions — not general chat or knowledge work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-19
- Method: public internet research — OpenAI announcement, GPT-5-Codex system card addendum, official API model docs (primary), plus independent cross-checks (Simon Willison's launch review, Theo Browne's video review via citation, aggregator leaderboards, web searches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
