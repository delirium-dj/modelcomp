# Pixel_canary — findings by DeepSeek 4.1 Flash

- Source: anonymous stealth vendor, served by Vercel AI Gateway (`stealth/pixel-canary`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Evidence note.** Pixel Canary is an anonymous stealth model: the developer is not
> disclosed, no model card exists and exactly one measured public eval (Vercel's Next.js
> evals) has been published. Every number below is traceable to a dated gateway row or
> that eval; dimensions with no evidence are labelled `no verified public score found`
> instead of filled in, so this is the lowest-confidence entry in the pack.

## Model card

- **Name:** Pixel Canary (stealth preview; the whole preview is free, so no "Free"-tier suffix is used)
- **Short description:** An anonymous large model pitched at web and mobile app development, with adjustable reasoning effort. Vercel describes it as "strong at coding, including building applications and refactoring existing code" and suited to frontend work — responsive layouts, app screens, navigation and interactive components. Vendor, weights and architecture are undisclosed.
- **Provider / access:** Vercel AI Gateway as `stealth/pixel-canary` (OpenAI Chat Completions, OpenAI Responses and Anthropic Messages formats plus the AI SDK; CLI integrations listed for Claude Code, Codex, OpenCode, OpenClaw, Hermes and fx), and resold by Command Code as `cmd --model stealth/pixel-canary`. Anonymous upstream provider.
- **Release / knowledge:** Released 2026-09-25 (AI Gateway provider row and changelog). Knowledge cutoff not disclosed.
- **IDs:** `stealth/pixel-canary`. No OpenCode Zen ID; free for a limited time via the AI Gateway stealth preview.
- **Context window:** 262K tokens total with a 131K max output (AI Gateway provider row, checked 2026-09-27). Note: the repo's curated `meta.json` still records 128K / text-only / "standard pricing" — the live gateway row is newer and larger.
- **Modalities:** text in / text out per the vendor listings; the AI Gateway model page additionally documents image message parts ("images count as input tokens"), so image input is plausible but confirmed by no model card. Reasoning yes (adjustable effort: none / minimal / low / medium / high / xhigh). Tool-calling and structured-output support are not documented on either listing.
- **Pricing (as of 2026-09-27):** $0.00 / 1M input, $0.00 / 1M output, no cache price listed — free while in stealth. **Privacy caveat:** no zero-data-retention option and "prompts and responses … may be used for training and model improvement".
- **Architecture:** undisclosed; closed API-only. Live serving numbers from the gateway row: **8.9 s p50 time-to-first-token** and **~9 tokens/s p50 throughput** on real gateway traffic (re-checked 2026-09-27 — my first pass recorded ~6.6 s and ~8 tps, so latency has drifted upward on live traffic).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / MCP-Universe / SWE Atlas Codebase QnA: **no verified public score found** — no function-calling, MCP or terminal-agent harness has published results for this model
- Structural evidence only (not a benchmark): first-class wiring into four coding agents (Claude Code, Codex, OpenCode/OpenClaw) plus Command Code's own agent, running against a 262K window with 131K max output

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / LCR / CritPt / MMMU: **no verified public score found**
- Artificial Analysis Intelligence Index: **not yet scored** per Command Code's Artificial Analysis-backed panel (checked 2026-09-27)
- Documented but unmeasured: adjustable reasoning effort across six levels (none → xhigh) on the AI Gateway page; no accuracy figure accompanies any level

Coding:

- Next.js evals (Vercel, 2026-09-25, pass@4 — a task passes if any of up to four attempts succeeds): **90.3% baseline success rate, 28 of 31 tasks**, tying GPT-6 Astra (high); **96.8%, 30 of 31 tasks**, with Next.js documentation supplied through `AGENTS.md`, which ties the leaderboard's top score in that setting
- Task coverage in that run: App Router migrations, data fetching, image and font optimization, caching, view transitions
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / Terminal-Bench: **no verified public score found**; Command Code lists "coding index: not yet scored"

Long context:

- No MRCR / RULER / GraphWalks recall value exists for the 262K window; the only long-context evidence is the window and output limits themselves plus the fact that an agentic coding harness is being run against it in production.

### Normalized scores (1–100)

- **Tool use: 66/100.** No function-calling, MCP or terminal benchmark exists at all, so this is a conservative floor justified only by first-class integration into four coding agents and a 262K working window; the complete absence of harness evidence is what caps it.
- **Reasoning: 62/100.** Nothing on GPQA/HLE-class suites; the provisional basis is real engineering task completion (28/31 = 90.3%, rising to 30/31 with docs), which demonstrates multi-step problem solving but says nothing about out-of-domain reasoning. Explicitly low confidence.
- **Context window: 72/100.** 262K total with a generous 131K max output sits just inside the 200K–500K tier (200K = 70); the absent recall benchmark keeps it far below the 1M tier.
- **Multimodal: 40/100.** Deliberately placed between the text-only floor band (10–20) and the image-input band (60–70): both vendor listings describe a coding-focused text model, while the AI Gateway page documents image message parts. No vision benchmark exists and output is text-only.
- **Coding: 85/100.** 90.3% baseline and 96.8% docs-in-context on Vercel's Next.js evals ties GPT-6 Astra and the leaderboard top — frontier-class web engineering — but it is one framework-specific harness at pass@4 with no SWE-bench/DeepSWE confirmation, which is why it stops short of the 90s.
- **Cost efficiency: 100/100.** $0.00 per 1M input and output with no hidden cache charge for the duration of the stealth preview. Flagged: the free window is explicitly time-limited, there is no ZDR, and prompts/outputs may be retained for training.
- **Overall Score: 65/100.** (66 + 62 + 72 + 40 + 85) / 5 = 65.0. Best fit: free, high-volume Next.js/frontend scaffolding, refactors and UI implementation — not for confidential code, and not where verified reasoning depth or tool-calling breadth is required.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (Vercel AI Gateway model page and 2026-09-25 changelog with the Next.js eval results, Command Code model page). **Re-verified 2026-09-27 against the AI Gateway page:** 262K context / 131K max output, Free pricing, provider "Stealth", release date 09/25/2026, the no-ZDR flag and the "prompts and outputs may be retained for training" warning all matched exactly, and the image-message-part example ("images count as input tokens") was confirmed again; **updated** — live p50 TTFT has risen to 8.9 s and throughput to ~9 tps. Scores are normalized 1–100 interpretations, not official vendor scores, and this is the least verified entry in the pack.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
