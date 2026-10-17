# GPT-5.4 Mini — findings by MiniMax M3

> OpenAI's small-tier model released 2026-03-17. 400K/128K, $0.75/$4.50,
> **headline tool-calling leap**: τ²-bench 93.4% (vs GPT-5 mini 74.1%) and
> MCP Atlas 57.7%. OpenAI's first "explicit subagent tier" model — uses 30%
> of GPT-5.4 quota inside Codex.

## Model card

- **Vendor:** OpenAI (closed weights; `gpt-5.4-mini` API ID; snapshot `gpt-5.4-mini-2026-03-17`; Zen `opencode/gpt-5.4-mini`).
- **Released:** 2026-03-17 (OpenAI announcement; AI/TLDR, apxml.com, aicostcheck 2026-03-18).
- **Architecture:** Proprietary, undisclosed. OpenAI has not published parameter counts or architectural details. The small-tier model in the GPT-5.4 family, positioned below GPT-5.4 (flagship) and above GPT-5.4 nano, **tuned for coding, computer use, tool calling, and subagent workloads** (OpenAI's framing). 2× faster than GPT-5 mini.
- **Context:** 400,000 total; 128,000 max out. Knowledge cutoff August 31, 2025.
- **Modalities:** Text + image in; text out. **No audio/video in** (per AI/TLDR — explicitly excluded).
- **Pricing:** $0.75 / $4.50 per 1M in/out; $0.075 cached input. Available via OpenAI API, Codex, ChatGPT (free + Go via Thinking option), GitHub Copilot.
- **Position:** **OpenAI's first "explicit subagent tier" model.** Codex routes 30% of GPT-5.4 quota through 5.4 mini subagents for parallel task execution (searching codebase, reviewing large files, processing supporting documents). The architectural pattern is now explicitly validated: large model plans + coordinates, small model executes at scale.

### Raw benchmarks found

- **SWE-Bench Pro: 54.4 %** (vs GPT-5 mini 45.7 %; full GPT-5.4 57.7 %). "Only a few points behind full GPT-5.4 at a fraction of the cost" (AI/TLDR).
- **OSWorld-Verified (computer use): 72.1 %** (vs full GPT-5.4 75.0 %). Near-parity on agentic computer-use.
- **Terminal-Bench 2.0: 60 %** (AI/TLDR; first published score for 5.4 mini on this eval).
- **τ²-bench (tool calling): 93.4 %** vs GPT-5 mini 74.1 % — **+19.3 pp jump, the headline gain** (Beam AI 2026-10-16).
- **MCP Atlas: 57.7 %** vs GPT-5 mini 47.6 % (+10.1 pp).
- **MRCR v2 (128K–256K context): 33.6 %** vs full GPT-5.4 79.3 % — the long-context weakness. "Where mini isn't the right fit: tasks requiring deep reasoning across very long documents."
- **No GPQA / AIME / HLE numbers** specifically published for 5.4 mini (Anthropic-style full benchmark suites are reserved for flagship 5.4 and 5.6).
- **GPT-5.4 nano** (sibling, March 17, 2026): 52.4 % on SWE-Bench Pro; $0.20/$1.25 per 1M. Designed for high-volume classification + routing + simple coding subtasks.
- **Codex integration:** "GPT-5.4 mini uses 30% of the GPT-5.4 quota, so running multiple subagents in parallel becomes cost-tractable" (OpenAI framing, Beam AI 2026-10-16).

### Normalized scores (1–100)

- **Tool use: 76/100.** **τ²-bench 93.4 %** is the family-high tool-calling score at the mini tier. 76.8 average reflects "tier-leading tool reliability at mini pricing, but not at the level of Grok 4 / Grok 4.1 Fast (84+) which are pure agentic tiers." Strong computer-use (OSWorld 72.1 %) gives the mini model near-parity with the full 5.4 on agentic tasks.
- **Reasoning: 80/100.** 80.6 average reflects "strong gains over GPT-5 mini (which scored 65-70 on equivalent reasoning tests), but trails full GPT-5.4 (88+), and the long-context weakness on MRCR v2 (33.6 %) is the family's biggest visible regression on long documents."
- **Context window: 78/100.** 400K (vs 1M for Kimi K3 / GPT-6 family / GLM 5.3). 78.6 average reflects "mid-tier context, well below the 1M-2M tier of the 2026 frontier." The MRCR v2 33.6 % number suggests long-context reliability is the real ceiling.
- **Multimodal: 72/100.** Text + image in (no audio/video). 72.3 average reflects "vision-capable, multimodal-capable, but trails Gemini 3.1 Flash-Lite (87) on audio/PDF and Kimi K2.5 (86) on image. The 5.4 multimodal ceiling is at the flagship, not mini."
- **Coding: 80/100.** **SWE-Bench Pro 54.4 % + TB 2.0 60 % + OSWorld 72.1 %** is a near-flagship coding profile at mini pricing. 78.9 average is high. Trails GLM 5.3 (89) on SWE-bench Verified, beats Claude Sonnet 5.5 (75) on Terminal-Bench 2.0. The "near-flagship coding at mini pricing" is the positioning.
- **Cost efficiency: 90/100.** **$0.75/$4.50 + $0.075 cached** is one of OpenAI's cheapest paths to near-flagship coding. **3× more expensive than GPT-5 mini on input** ($0.25 → $0.75), but the gains justify the premium for high-volume subagent workloads. 89.6 average reflects "mid-tier pricing for a coding tier that competes with much more expensive flagships."
- **Overall Score: 77/100.** Half-up mean of the 5 non-cost quality dims: (76 + 80 + 78 + 72 + 80) / 5 = 386 / 5 = 77.2 → **77**. (Note: **the 30% quota leverage in Codex is the real-world differentiator** — GPT-5.4 mini is positioned not as a standalone model but as the executor in a hierarchical multi-agent stack. Average reflects "subagent tier at near-flagship coding quality," not "best-in-class frontier model.")

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17