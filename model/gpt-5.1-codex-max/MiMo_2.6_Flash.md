# GPT-5.1-Codex-Max — findings by MiMo 2.6 Flash

- Source: OpenAI (`openai/gpt-5.1-codex-max`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's purpose-built agentic-coding model, a long-running-task-optimized version of GPT-5.1-Codex; first Codex model natively trained for compaction (operating across multiple context windows over millions of tokens) and the first trained for Windows environments — aimed at project-scale refactors and multi-hour agent loops.
- **Provider / access:** OpenAI API, **Responses API only** (`https://api.openai.com/v1/responses`) — Chat Completions is not supported for this model (OpenAI model card).
- **Release / knowledge:** released late 2025 (OpenAI launch post "Building more with GPT-5.1-Codex-Max"; exact day not stated in sources found); knowledge cutoff 2024-09-30.
- **IDs:** `openai/gpt-5.1-codex-max` (API model id `gpt-5.1-codex-max`). No Free tier (OpenAI: "Free — Not supported" in rate-limit table). No Zen Free ID verified.
- **Context window:** 400,000 tokens input; 128,000 max output tokens (OpenAI model card); reasoning-token support; compaction extends effective work past the single window.
- **Modalities:** text and image in; text out; reasoning yes; function calling, structured outputs, web_search tool, prompt caching; fine-tuning not supported.
- **Pricing (as of 2026-10-21):** $1.25 in / $0.125 cached input / $10.00 out per 1M tokens (OpenAI model card). Paid only.
- **Architecture:** proprietary.

### Raw benchmarks found

> Official OpenAI appendix numbers; all evals run with compaction enabled at Extra High reasoning effort; Terminal-Bench 2.0 ran with Codex CLI in the Laude Institute Harbor harness.

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** (OpenAI launch post; Codex CLI + Harbor harness, xhigh)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Web-search + function-calling tools supported in Responses API (OpenAI model card)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for this exact ID (base GPT-5.1 reports ~88% but is a different model — lineage only)
- HLE / LCR / CritPt / Intelligence Index: no verified public score found for this exact ID

Coding:

- SWE-bench Verified (n=500): **77.9%** (OpenAI launch post)
- SWE-Lancer IC SWE: **79.9%** (OpenAI launch post)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found for this exact ID
- Token efficiency: 30% fewer thinking tokens than GPT-5.1-Codex at the same (medium) effort on SWE-bench Verified (OpenAI launch post)

Long context:

- No MRCR/RULER-style public retrieval figure; compaction (history pruning across windows) is the vendor's long-horizon mechanism, claimed to complete tasks over millions of tokens (OpenAI launch post).

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 58.1% tops the mid band for terminal agents, and the model is natively built for multi-hour agentic loops with web_search/function calling — but no Tau3/GDPval/Claw rows exist for it.
- **Reasoning: 74/100.** Reasoning-token support and xhigh effort power the official evals, yet no public GPQA/HLE/Index figure exists for this exact ID — scored on coding-adjacent evidence only, never on the base GPT-5.1's numbers.
- **Context window: 82/100.** 400K input sits near the top of the 200K–500K tier; compaction (native multi-window operation) is a unique long-horizon multiplier, but no measured retrieval score at window length exists.
- **Multimodal: 65/100.** Image + text input, text output (no video/audio, no non-text out) — standard image-in tier for a coding model.
- **Coding: 88/100.** SWE-bench Verified 77.9% clears the frontier DeepSWE reference (74%+), SWE-Lancer IC 79.9% is best-in-class for freelance-style SWE, Terminal-Bench 2.0 58.1% is solid; missing LiveCodeBench/DeepSWE rows keep it just under 90.
- **Cost efficiency: 70/100.** $1.25/$10.00 with $0.125 cache — output-expensive for token-heavy agent loops; no free lane.
- **Overall Score: 76/100.** Mean of (72 + 74 + 82 + 65 + 88) / 5 = 76.2 → 76. Best fit: premium long-horizon agentic coding (project-scale refactors, multi-hour loops) when Responses API + $10/M output is acceptable.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (OpenAI model card + launch post, LLM Stats context/pricing tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
