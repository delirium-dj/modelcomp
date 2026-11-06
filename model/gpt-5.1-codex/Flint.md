# GPT-5.1 Codex — findings by Flint

- Source: OpenAI / GPT-5.1 Codex
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex (GPT-5.1 High) (OpenAI; GPT-5.1 family — Codex tier).
- **Short description:** OpenAI's upgraded GPT-5 series (GPT-5.1 Instant / GPT-5.1 Thinking, released November 2025) positioned for the coding agent workflow; GPT-5.1 Thinking made reasoning more adaptive and efficient, with meaningful gains on math and coding evaluations (AIME 2025, Codeforces) over GPT-5.
- **Provider / access:** OpenAI API (`gpt-5.1` reasoning model; `gpt-5.1-chat-latest` Instant) and Codex app/CLI/IDE; proprietary (closed weights).
- **Release / knowledge:** Released November 12–13, 2025 (OpenAI blog; Artificial Analysis; Epoch AI); knowledge cutoff September 30, 2024 (Artificial Analysis).
- **IDs:** `gpt-5.1` (OpenAI API reasoning model); Codex agentic surface.
- **Context window:** 400K tokens (OpenAI API; Artificial Analysis).
- **Modalities:** Text + image input, text output; reasoning yes (Thinking / High); tool use yes (Codex agentic coding: SWE-bench, Terminal-Bench, τ2-bench, MCP Atlas per OpenAI/Artificial Analysis).
- **Pricing (as of 2026-10-28):** $1.25 per 1M input tokens / $10 per 1M output tokens (OpenAI API; Artificial Analysis); cache discount 90%; blended ≈ $1.34 per 1M; GPT-5.1 Instant via API as `gpt-5.1-chat-latest`.
- **Architecture:** Proprietary (closed weights); parameter count not disclosed.

### Raw benchmarks found

- Coding / agentic:
  - SWE-bench Verified: **68%** (GPT-5.1; Epoch AI).
  - AIME 2025 and Codeforces: significant improvements over GPT-5 (OpenAI blog).

- Reasoning / knowledge:
  - GPQA Diamond: **88%** (GPT-5.1; Epoch AI).
  - ARC-AGI-2: **18%** (best score 95%); ARC-AGI-1: **73%** (best score 99%) (Epoch AI).
  - OTIS Mock AIME 2024-2025: **89%** (Epoch AI).
  - Humanity's Last Exam (HLE): **24%** (best score 55%) (Epoch AI).
  - SimpleQA Verified: **48%** (GPT-5.1; Epoch AI).
  - Chess Puzzles: **42%** (Epoch AI).

### Cross-source comparison

- Official (OpenAI blog "GPT-5.1: A smarter, more conversational ChatGPT", Nov 12, 2025) vs independent (Artificial Analysis, Epoch AI): OpenAI released GPT-5.1 Instant + Thinking (Nov 2025); Artificial Analysis independently tracked GPT-5.1 (High) released November 13, 2025, proprietary closed weights, reasoning yes, 400K context, multimodal text+image, knowledge cutoff Sep 2024, pricing $1.25/$10, cache 90%, 133.5 t/s, TTFT 39.14s; Epoch AI tracked ECI **150** (#3/161 tracked at release). Coding gains reported by OpenAI (AIME 2025, Codeforces) vs Epoch AI's SWE-bench Verified **68%** — consistent direction, no head-to-head conflict.

### Normalized scores (1-100)

- **Tool use: 65/100.** SWE-bench Verified **68%** (agentic software engineering); Codex-tier delegation surface; below frontier proprietary tool tiers → capped.

- **Reasoning: 72/100.** GPQA Diamond **88%**, OTIS Mock AIME **89%**, SimpleQA Verified **48%**; Epoch AI ECI **150** (#63/253); ARC-AGI-2 **18%** pulls the absolute ceiling down → capped below proprietary frontier reasoning.

- **Context window: 90/100.** 400K tokens (OpenAI API; Artificial Analysis) → top-tier context band for the proprietary tier.

- **Multimodal: 65/100.** Text + image input, text out; knowledge cutoff September 2024 (Artificial Analysis) → moderate multimodal band.

- **Coding: 75/100.** SWE-bench Verified **68%**, AIME 2025 / Codeforces improvements over GPT-5 (OpenAI) → mid-high coding band; Codex-tier performance.

- **Cost efficiency: 55/100.** $1.25/$10 per 1M tokens (premium proprietary tier) → moderate cost-efficiency value.

- **Overall Score: 73/100.** Mean of the five quality dims (Tool 65 + Reasoning 72 + Context 90 + Multimodal 65 + Coding 75) / 5 = 73.4 → half-up **73**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (OpenAI blog / GPT-5.1) plus independent benchmarks/reviews (Artificial Analysis, Epoch AI) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
