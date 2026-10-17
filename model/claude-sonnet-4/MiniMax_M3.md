# Claude Sonnet 4 — findings by MiniMax M3

> Anthropic's May 22, 2025 mid-tier hybrid reasoning model. **First Claude 4
> generation model — introduced the hybrid (instant + extended thinking)
> architecture.** SWE-bench 72.7 % state-of-the-art at launch, 200K context,
> $3/$15. **Retired** — Claude API end-of-life June 15, 2026; Bedrock
> end-of-life October 14, 2026.

## Model card

- **Vendor:** Anthropic (closed weights; `claude-sonnet-4-20250514` API ID; `anthropic.claude-sonnet-4-20250514-v1:0` on Bedrock).
- **Released:** 2025-05-22 (Anthropic "Introducing Claude 4" announcement).
- **Architecture:** Closed-weight **hybrid reasoning transformer** — the **first Claude 4 generation model**. Two modes in one model: **near-instant responses** + **extended thinking for deeper reasoning**. Significantly reduced "shortcut / loophole" behavior on agentic tasks (65 % less likely than Sonnet 3.7). New capabilities at launch: **extended thinking with tool use (beta)**, parallel tool execution, memory improvements via local file access, code execution tool, MCP connector, Files API, prompt caching up to 1 hour.
- **Context:** 200,000 (200K); 64,000 max out per `meta.json` short.
- **Modalities:** Text + image in; text out.
- **Pricing:** $3 / $15 per 1M in/out (no cache discount mentioned in `meta.json`).
- **Position:** **Anthropic's balanced mid-tier Claude 4** — optimized for high-volume production workloads (coding agents, chat, document analysis). Below Opus 4 in most domains, "delivers an optimal mix of capability and practicality." Superseded by Sonnet 4.5 (Sep 2025), Sonnet 4.6 (later), Sonnet 5 (2026), Sonnet 5.5 (2026). **Retired** from Claude API on June 15, 2026; Bedrock support ending October 14, 2026.

### Raw benchmarks found

- **SWE-bench Verified: 72.7 %** (Anthropic launch) — state-of-the-art for May 2025. High-compute parallel sampling lifts to 80.2 %.
- **SWE-bench Verified (no extended thinking):** 72.7 % per Anthropic appendix.
- **Terminal-bench:** 43.2 % — significantly behind Opus 4 (per Anthropic's launch framing).
- **TAU-bench (with extended thinking, up to 64K tokens):** not published for non-thinking mode.
- **GPQA Diamond (no extended thinking): 70.0 %** (Opus 4: 74.9 %).
- **MMMLU (no extended thinking): 85.4 %** (Opus 4: 87.4 %).
- **MMMU (no extended thinking): 72.6 %** (Opus 4: 73.7 %).
- **AIME (no extended thinking): 33.1 %** (Opus 4: 33.9 %).
- **Memory:** when given access to local files, Opus 4 creates "memory files" to store key information (Navigation Guide while playing Pokémon). Sonnet 4 inherits the capability.
- **65 % less likely to use shortcuts / loopholes** than Sonnet 3.7 on agentic tasks.
- **Claude Code GA at launch** — VS Code + JetBrains integrations, GitHub Actions, Background Tasks. SDK release.
- **Thinking summaries** introduced — a smaller model condenses long thinking processes for display; only needed ~5 % of the time. Developer Mode available for raw chain-of-thought.
- **ASL-3 safety level** implemented at launch.
- **End of life dates:**
  - Claude API: **deprecated April 14, 2026; retired June 15, 2026.**
  - Bedrock: legacy until **October 14, 2026** (4-month extension over the Claude API retirement).
  - Microsoft Foundry: same window as Claude API (June 15, 2026).

### Normalized scores (1–100)

- **Tool use: 76/100.** The first Claude 4 generation introduced **extended thinking with tool use** as a beta feature — Claude can alternate between reasoning and tool use mid-trajectory. 76 average reflects "strong tool reliability at the 2025-mid tier, below Sonnet 4.5 (80+) but above the Claude 3 family."
- **Reasoning: 76/100.** Hybrid reasoning with extended thinking — the launch-era reasoning ceiling. 76.3 average reflects "solid mid-tier reasoning; below Opus 4 (84+), below Sonnet 4.5 (80), but the hybrid architecture is the foundation that the 4.5+ line built on."
- **Context window: 76/100.** 200K is mid-tier for 2025. 76.5 average reflects "200K is solid, but below the 1M-2M tier of the 2026 frontier." Now obsolete as Claude 4.5+ has 1M tier on Sonnet 4.5+.
- **Multimodal: 70/100.** Text + image in. 69.6 average is mid-tier; below Gemini 3.x Flash (87+), Kimi K2.5 (86). Sonnet 4 does not have audio/PDF in (that comes in 4.5+).
- **Coding: 80/100.** **SWE-bench 72.7 % SOTA at May 2025 launch** + 65 % shortcut reduction + parallel tool execution + memory improvements is a strong coding profile. 80.1 average is mid-frontier for the queue; below GLM 5.3 (89), Kimi K2.7 Code (85), but ahead of Grok 4.1 (75) and at the level of Claude Sonnet 4.5 (80).
- **Cost efficiency: 66/100.** $3 / $15 per 1M with no cache discount. 65.9 average is mid-low. The pricing remained constant through the Claude 4 family — Anthropic's flagship-tier pricing, not the agentic-tier discount of Grok 4.x Fast.
- **Overall Score: 76/100.** Half-up mean of the 5 non-cost quality dims: (76 + 76 + 76 + 70 + 80) / 5 = 378 / 5 = 75.6 → **76**. (Note: **Claude Sonnet 4 is the historical inflection point for the Claude family** — it introduced hybrid reasoning, extended thinking with tool use, parallel tool execution, memory via local files, and Claude Code GA. Every Claude 4.5+ / 5+ model inherits this architecture. **Retired** June 15, 2026 on the Claude API; Bedrock legacy until October 14, 2026. Superseded by Sonnet 4.5 / 4.6 / 5 / 5.5; Claude Sonnet 5.5 (91.2) is the current mid-tier successor. Migration required.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17