# Claude Opus 4.6 — findings by Solar Mini 4

> TEMPLATE — do not commit as-is. Replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`.
>
> - Source: Anthropic (`claude-opus-4-6`)
> - Date: 2026-10-24 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Anthropic)
- **Short description:** Anthropic's flagship 1M-context model (beta) with agent teams, adaptive thinking, and strong GDPval-AA/HLE results — a broad capability expansion over Opus 4.5 rather than a jump.
- **Provider / access:** claude.ai, Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; Responses/Messages APIs.
- **Release / knowledge:** released Feb 5, 2026; knowledge cutoff May 2025 (reliable); training data Aug 2025.
- **IDs:** `claude-opus-4-6` (Claude API); `anthropic.claude-opus-4-6-v1` (Bedrock InvokeModel). No free ID — paid only.
- **Context window:** 1,048,576 (1M) total (beta, Developer Platform only); 128K max output; tokens >200K charged at premium rates ($10/$37.50 per M).
- **Modalities:** text + image in → text out; adaptive thinking (extended thinking deprecated); effort controls; compaction; Agent Teams (Claude Code, research preview).
- **Pricing (as of 2026-10-24):** $5/M input / $25/M output (standard); premium $10/$37.50 per M above 200K tokens; cache 5m $6.25, 1h $10, read $0.50; batch 50%.
- **Architecture:** proprietary, undisclosed param count; "Legacy" status; retirement not sooner than Feb 5, 2027.

### Raw benchmarks found

> Measured numbers with source, rank/percentile and harness.

**Agent / tool use**
- MCP Atlas: 62.7% max effort (official, industry-leading)
- BrowseComp: 84% (official)
- Terminal-Bench 2.0: 65.4% (official, state-of-the-art, beats GPT-5.2); claude5.com reports 77.3% — conflict noted
- Agent Teams: research preview (tmux orchestrator, Claude Code)

**Terminal-Bench 2.0:** 65.4% (official + llm-stats); claude5.com 77.3% — conflict noted

**Tau3-Banking / Tau2-Bench:** no verified public score found for Opus 4.6 in my sources

**GDPval-AA:** 1606 Elo (official + The Decoder; +144 vs GPT-5.2, +190 vs Opus 4.5)

**Claw-Eval / ClawProBench:** no verified public score found

**MCP-Atlas / SWE Atlas / Toolathlon:** MCP Atlas 62.7% max effort (official, industry-leading); other Toolathlon rows: no verified score found

**Reasoning / knowledge**
- HLE: 53.0% with tools (official; updated Feb 23, 2026 from 53.1%)
- ARC-AGI-2: 68.8% (llm-stats; vs 37.6% on Opus 4.5 — large reasoning leap); claude5.com same
- CritPt: no verified public score found
- GPQA Diamond: no verified public score found
- AA-Omniscience: no verified public score found

**Coding**
- SWE-bench Verified: 80.8% (llm-stats; 4.5: 80.9%; official with prompt modification 81.42%)
- Terminal-Bench 2.0: 65.4% (above)
- MCP Atlas: 62.7% max effort, industry-leading (above)
- BrowseComp: 84% (official)
- LiveCodeBench: no verified public score found

**Long context**
- MRCR v2 (GDM-MRCRv2): 76% at 1M, 8-needle (official; The Decoder; llm-stats) vs Sonnet 4.5 18.5% (claude5.com says GPT-5.2 18.5% — conflict noted)

### Normalized scores (1–100)
- **Tool use: 90/100.** MCP Atlas 62.7% max effort (industry-leading), Agent Teams (preview), BrowseComp 84%, Terminal-Bench 2.0 state-of-the-art 65.4%; caps: Agent Teams still a research preview.
- **Reasoning: 85/100.** ARC-AGI-2 68.8% (vs 37.6% on 4.5), HLE 53.0% with tools (leader), GDPval-AA 1606 Elo (#1); caps: Terminal-Bench 2.0 65.4% mid-pack; overthinking noted; MRCR v2 baseline conflict (Sonnet 4.5 vs GPT-5.2 18.5%).
- **Context window: 100/100.** 1,048,576 (1M) total (beta, Dev Platform); 128K max output; MRCR v2 76% at 1M verified.
- **Multimodal: 25/100.** Text + image in, text out (not text-only, but no video/audio/PDF input).
- **Coding: 85/100.** SWE-bench Verified 80.8% (flat vs 4.5), Terminal-Bench 2.0 65.4% state-of-the-art, MCP Atlas 62.7% industry-leading; caps: TB2.0 score conflict (65.4% official vs 77.3% claude5.com).
- **Cost efficiency: 15/100.** $5/M input / $25/M output (premium tier; same as Opus 4.8/Opus 5); >200K tokens at $10/$37.50.
- **Overall Score: 77/100.** (90+85+100+25+85)/5 = 77.0.
**Conflicts noted:** (1) Terminal-Bench 2.0 65.4% (official/llm-stats) vs 77.3% (claude5.com); (2) MRCR v2 comparison baseline (Sonnet 4.5 18.5% vs GPT-5.2 18.5%); (3) direct prompt-injection metric dropped by Anthropic, indirect injection slightly higher than 4.5 (official + The Decoder); (4) HLE 53.1% → 53.0% correction on Feb 23, 2026 (official).
## Signature
- Provided by: **Solar Mini 4 (solar-mini-4)** — 2026-10-24
- Method: public internet research (official Anthropic pages, Artificial Analysis, llm-stats, The Decoder, TechCrunch, claude5.com); scores are normalized 1–100 interpretations, not official vendor scores.
## Submission checklist (complete, then remove this section before finishing)
1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4.6/Solar_Mini_4.md` (the assigned stem).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-4.6/`.
4. No benchmark invented; conflicts listed above.