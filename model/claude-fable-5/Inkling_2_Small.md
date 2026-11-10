# Claude Fable 5 — findings by Fledge Alpha

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first widely released Mythos-class model (June 2026), positioned above the Opus family for demanding reasoning and long-horizon agentic work. Ships with production safety classifiers; the safeguard-free twin (Claude Mythos 5) is restricted to Project Glasswing.
- **Provider / access:** Claude API (`claude-fable-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry, plus routers (OpenRouter `anthropic/claude-fable-5`). Messages API.
- **Release / knowledge:** 2026-06-09 release (temporarily suspended 2026-06-12, redeployed 2026-07-01); knowledge cutoff 2026-01 (per CloudPrice specs API).
- **IDs:** `anthropic/claude-fable-5` (no Free ID on Zen found)
- **Context window:** 1M tokens; up to 128K max output (Anthropic platform docs; inference.net measures 977K usable).
- **Modalities:** text/image/PDF in; text out; adaptive thinking (always-on reasoning); tool calls; structured outputs / native JSON schema; computer use; code execution; prompt caching; web search. No audio/video input.
- **Pricing (as of 2026-10-08):** $10 input / $50 output per 1M tokens; ~90% prompt-cache discount (cache read ≈ $1.00/1M). Paid only.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (BenchLM public lane; Vals harness reports 80.5%)
- OSWorld-Verified: **85%** (BenchLM, vs GPT-5.5 78.7%)
- Tau2-Bench: **0.99** (CloudPrice / Artificial Analysis, #5); τ-bench Banking **38%**
- TerminalBench Hard: **63%** (Artificial Analysis via api.airforce, #2)
- Claw-Eval / ClawProBench: no verified public score found
- Terminal-Bench-Science 0.1: **24.7%** (Anthropic reproduction; public leaderboard 21.4%)

Reasoning / knowledge:

- GPQA Diamond: **93%** (Artificial Analysis via api.airforce)
- HLE: **56%** (Artificial Analysis via api.airforce; CloudPrice HLE 0.6, #3)
- LCR: **0.8** (CloudPrice, #21)
- ARC-AGI-2: **89.2%** (BenchLM, vs GPT-5.5 85%)
- Artificial Analysis Intelligence Index: **49.6–49.7** (#5 of ~145, per CloudPrice / api.airforce)
- SciCode: **61%** (Artificial Analysis via api.airforce, #3)

Coding:

- SWE-bench Pro: **80.3%** (Anthropic launch figures, claude5.ai; ~11 pts ahead of next-best frontier model)
- FrontierCode (Cognition): highest among frontier models, even at medium effort (Anthropic)
- AA Coding Index: **76.5** (#7, CloudPrice); AA Coding (5.1): 81.6 (#1 of 138, OrcaRouter)
- CursorBench: state of the art at launch (Cursor CEO quote via claude5.ai)

Long context:

- 1M-token window verified across Anthropic docs and providers; file-based memory demo (Slay the Spire 3x better than Opus 4.8); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 84.3%, Tau2 0.99 (#5), OSWorld-Verified 85%, plus native computer use and code execution; capped by mid-pack τ-bench Banking (38%) and safeguard-driven refusals on some agentic tasks.
- **Reasoning: 88/100.** GPQA 93%, HLE 56% (#3), ARC-AGI-2 89.2%, AA Intelligence #5; capped by Intelligence Index 49.6 trailing the very top tier.
- **Context window: 95/100.** Verified 1M-token window with 128K max output and long-horizon memory tooling; capped short of 100 absent published MRCR/RULER retrieval numbers at full window.
- **Multimodal: 70/100.** Strong vision (SOTA scientific-figure extraction, Pokémon FireRed vision-only run) and PDF input, but text-only output and no audio/video.
- **Coding: 93/100.** SWE-bench Pro 80.3% (SOTA at launch, +11 pts over field), top FrontierCode score, CursorBench SOTA; capped slightly as Coding Index #7 and successor Fable 5.1 now edges it.
- **Cost efficiency: 35/100.** $10/$50 per 1M is premium-tier pricing; ~90% cache discount helps but no free tier found.
- **Overall Score: 87/100.** Mean of (90, 88, 95, 70, 93) = 87.2 → 87. Best fit: long-horizon agentic coding and knowledge work where the 1M window and tool stack justify premium pricing.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Anthropic platform docs + launch posts, Artificial Analysis via CloudPrice/api.airforce, BenchLM, claude5.ai, inference.net, OrcaRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
