# Space Bunny Alpha — findings by Muse Spark 1.2

- Source: Stealth (anonymous) / Space Bunny Alpha (stealth/space-bunny-alpha, opencode/space-bunny-free)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (Space Bunny Free on OpenCode Zen)
- **Short description:** Anonymous stealth preview reasoning model — 1M context, image/video input, reasoning low→max, free preview on OpenCode/Zen & OpenRouter; vendor undisclosed (MiniMax tokenizer match is family clue, not confirmed ownership).
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` / OpenCode Zen `opencode/space-bunny-free` — anonymous third-party provider, zero-retention, not used for training, stealth preview free ($0). API IDs: `stealth/space-bunny-alpha`, `opencode/space-bunny-free`.
- **Release / knowledge:** Appeared 2026-09-23 (OpenRouter listing, OrcaRouter leak Sep 23, blog.buildfastwithai Sep 24); anonymous preview — no vendor page, no weights, knowledge cutoff null undisclosed.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter), `opencode/space-bunny-free` (Zen); no parameter count/license disclosed
- **Context window:** 1,000,000 tokens total, 524,288 max completion (reasoning+output share budget) // per OpenRouter, OrcaRouter, meta.json 1M/524K, blog.buildfastwithai 1M/524K. Reported prompt-token overhead +143/+157 vs local MiniMax tokenizer via stealthprint.
- **Modalities:** Text, image, video in; text out (code, SVG, tools); reasoning yes (mandatory reasoning, effort low→max); tool calling + structured output; JSON mode via OpenRouter.
- **Pricing (as of 2026-09-25):** **$0 Free** during stealth preview (OpenRouter $0, OpenCode Zen free limited preview per meta.json freeTierNote/pricingNote) — zero-retention. Post-preview pricing not announced. Source: openrouter.ai, spacebunnyalpha.com, orcarouter.ai.
- **Architecture:** Proprietary/anonymous — no disclosed params; independent stealthprint on OpenCode Go shows 24/24 MiniMax tokenizer probe match (family clue, includes M3/M2.5), not ownership proof; knowledge cutoff null.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA: **no verified public score found** for this ID (only AI BENCHY composite below)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AI BENCHY (independent tracker): **56.1% pass rate, 10.0 reliability, 6.5 benchmark score — #204 leaderboard** (blog.buildfastwithai Sep 24 citing AI BENCHY live dashboard; strongest category domain-specific, weakest instruction following)
- OSWorld / AutomationBench: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / CritPt: **no verified public score found** for this ID (no Artificial Analysis Index, no arena rating as of OrcaRouter leak)
- OmniDocBench / CharXiv / VideoMMMU: **no verified public score found**
- Independent recall probe: **Claude Opus 4.5 Nov 2025 release month correctly identified as November 2025** (spacebunnyalpha.com field guide — single anecdotal probe, not benchmark %)
- LCR / MLCR / MRCR v2 official: **no verified public MRCR/RULER point score found** — but field evidence: **3/3 hidden codes retrieved from 200,044 local tokens / 200,187 reported prompt tokens** (spacebunnyalpha.com field test) and single-image color probes 8/8 + 3/4 1×1 pixel, suggesting functional long-context retrieval at ~200K but not MRCR %.

Coding:

- SWE-bench Verified / Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** (OrcaRouter explicitly: no benchmark of any kind as of Sep 23)
- Field evidence: functional coding via SVG benchmark (expressive characters, composition), but no scored coding benchmark %

Long context:

- No MRCR v2 / RULER / GraphWalks % reported. Window claim 1M // 524K completion. Field probe: 3/3 codes from ~200K input recovered in one trial (spacebunnyalpha.com). TokenDyno throughput measured as functional long-context indicator but not retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 55/100.** No Terminal-Bench/Tau2/GDPval/MCP verification; only AI BENCHY 56.1% composite (#204) and field retrieval probes provide weak proxy — capped well below frontier 88%+ TB, provisional mid-tier until full suite lands.
- **Reasoning: 55/100.** No GPQA/HLE/Index; AI BENCHY 6.5 score domain-limited, anecdotal recall not comparable to GPQA 90%+ frontier — capped at mid-tier, slight penalty for missing core indices.
- **Context window: 96/100.** 1M total/524K out verified via OpenRouter/OrcaRouter in ≥1M tier (95-100); functional 200K retrieval probe supports capability but no MRCR 98%+ at 512K+ prevents 100, and undisclosed long-output coherence prevents full marks.
- **Multimodal: 80/100.** Native text+image+video in via OpenRouter listing, demoed with image color probes, SVG rendering; text out only, no audio in/out, so below 90-100 audio-omni tier — scored in 75-90 video/PDF tier per methodology.
- **Coding: 55/100.** No SWE/LiveCode/SciCode verification; AI BENCHY domain-specific strength hint but #204 overall suggests below frontier; capped pending verified SWE-Pro/LiveCode run — placeholder mid-tier.
- **Cost efficiency: 100/100.** $0 free preview (OpenRouter & Zen) — frontier free-tier value, but limited-time stealth caveat (pricing post-preview unknown, zero-retention caveat).
- **Overall Score: 68/100.** Mean of five quality dims (55+55+96+80+55)/5=68.2 → 68. Best-fit: free-stealth 1M multimodal probe — use to test 1M image/video + tool calling for free, keep measured fallback model on critical path until vendor reveal + full benchmarks arrive.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (openrouter.ai stealth listing, spacebunnyalpha.com field guide 24 Sep 2026 snapshot, blog.buildfastwithai.com Sep 24 AI BENCHY, orcarouter.ai leak Sep 23, OpenCode Zen meta.json/TokenDyno); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

