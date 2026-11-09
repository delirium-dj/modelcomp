# MiniMax M3.1 Flash Preview — Research Notes

**Model ID:** minimax-ai/minimax-m3.1-flash-preview  
**Context window:** Unverified (no public spec)  
**Modalities:** Text in/out (image/video unverified for this checkpoint)  
**Pricing:** No public per-token price (MiniMax Code / Token Plan only)
**Also known as:** Space Bunny, Space Bunny Alpha, Space Bunny Free (stealth identity revealed 2026-10-19)

## Benchmarks

- DeepSWE 1.1: 73.7% (mini-SWE-agent, 512K context)
- NL2Repo-Bench: 61.2% (Claude Code harness)
- Terminal Bench 4.0: 38.1% (Codex harness)
- Five effort levels for dial-in reasoning depth

## Scores

- **Tool use: 78/100.** Terminal Bench 4.0 38.1%; NL2Repo-Bench 61.2%; five-level effort system enables flexible tool-use depth but benchmark coverage is sparse for a preview checkpoint.
- **Reasoning: 78/100.** DeepSWE 1.1 73.7% — competitive flash-class reasoning; no MMLU or general benchmarks published for this preview checkpoint.
- **Context window: 65/100.** Unverified (MiniMax publishes no context spec); 512K used in benchmark testing but not officially confirmed as a limit.
- **Multimodal: 15/100.** Text in/out; image and video input unverified for this Flash Preview checkpoint — treated as text-only until confirmed.
- **Coding: 79/100.** DeepSWE 73.7% is strong for a flash-class preview; NL2Repo-Bench 61.2%; trails DeepSeek V4.1 Flash but competitive in class.
- **Cost efficiency: 50/100.** No public per-token price — MiniMax Code/Token Plan only; opacity on pricing is a significant downside even if underlying cost may be low.
- **Overall Score: 63/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (78+78+65+15+79)/5 = 63. The revealed Space Bunny: strong coding preview with a unique five-effort-level system, but opaque context spec and unverified multimodal inputs cap its score significantly.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
