# MiniMax M2.5 — findings by GLM 5.3

- Source: MiniMax (`minimax-m2.5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's agent-native open-weights MoE model (230B, MIT), positioned as SOTA-for-cost in coding, agentic tool use/search, and office work; superseded within the family by M2.7 and M3.
- **Provider / access:** MiniMax platform (`platform.minimax.io`, agent.minimax.io), Amazon Bedrock (`minimax.minimax-m2-5`), Hugging Face `MiniMaxAI/MiniMax-M2.5`. Chat Completions-style API.
- **Release / knowledge:** Released 2026-02-12 (official launch post).
- **IDs:** `MiniMax-M2.5` (HF, open weights, MIT); `minimax-m2.5` (API); no Free ID — pay-per-token only.
- **Context window:** 1M tokens (MiniMax announcement opens 1M ultra-long context; llm-stats 1.0M in / 1.0M out) — CONFLICT: BenchLM profile lists 128K; two sources vs one, scored on 1M.
- **Modalities:** text + image in → text out (llm-stats); efficient reasoning (no explicit reasoning-mode profile on BenchLM); tool calls; parallel tool calling; JSON mode.
- **Pricing (as of 2026-10-16):** $0.30 / MTok in, $0.03 cached in, $1.20 / MTok out (llm-stats, MiniMax provider). Announcement says M2.5-Lightning (100 TPS) is $0.30/$2.40 and M2.5 (50 TPS) costs half that — i.e. ~$0.15 in; minor source conflict noted.
- **Architecture:** 230B total params, MoE (llm-stats); open weights, MIT license; CISPO RL algorithm, Forge agent-native RL framework; trained on 200k+ real-world environments across 10+ languages.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (with context management): **76.3%** (MiniMax launch post, WebExplorer agent framework) — industry-leading claim
- Wide Search: **industry-leading claim, exact value not published** (MiniMax launch post)
- RISE (internal realistic search eval): "M2.5 excels", no number published
- GDPval-MM (internal, pairwise win rate): **59.0% average win rate** vs mainstream models (MiniMax launch post)
- ~20% fewer search rounds vs M2.1 across BrowseComp/Wide Search/RIE (MiniMax)
- Terminal-Bench 2: tested internally with Claude Code scaffold, **no public value published**
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- AIME25 through AA-LCR: tested internally per AA methods, **values not published in fetched sources** — no verified public score found
- GPQA / HLE / MRCR: no verified public score found

Coding:

- SWE-bench Verified: **80.2%** (MiniMax launch post, Claude Code scaffold, 4-run average); cross-harness: **79.7%** on Droid (> Opus 4.6 78.9%), **76.1%** on OpenCode (> Opus 4.6 75.9%)
- Multi-SWE-Bench: **51.3%** (MiniMax launch post)
- SWE-bench runtime: 22.8 min avg vs Opus 4.6's 22.9 min, at 10% of Opus cost (MiniMax)
- VIBE-Pro: **on par with Opus 4.5** (MiniMax internal, no absolute number published)
- Vibe Code Bench (Vals v1.1): **14.85%** (BenchLM → Vals) — large conflict with the internal VIBE-Pro claim; different benchmark version, noted not merged
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- 1M window API-documented; no MRCR/RULER retrieval score published — no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 76.3% and GDPval-MM 59% win rate are strong, with 20% fewer search rounds; capped by absence of public Terminal-Bench/Tau/standard tool-bench numbers (all key agent evals besides BrowseComp are internal or unpublished).
- **Reasoning: 72/100.** No public GPQA/HLE/AIME numbers; "close to frontier" agent claims and AA-methodology internal testing referenced but unpublished — scored mid on positioning and verified coding-adjacent reasoning only.
- **Context window: 95/100.** 1M verified by two sources (announcement + llm-stats); ≥1M tier without published retrieval-proof; BenchLM's 128K listing treated as the outlier.
- **Multimodal: 65/100.** Text + image input, text-only output; no audio/video/PDF evidence — mid image-in tier.
- **Coding: 85/100.** SWE-bench Verified 80.2% holds across three harnesses (80.2/79.7/76.1), Multi-SWE 51.3%, VIBE-Pro ~ Opus 4.5; capped by the low independent Vibe Code Bench 14.85% (Vals) and no public LiveCodeBench/SciCode.
- **Cost efficiency: 95/100.** $0.30/$1.20 per MTok with $0.03 cached reads — roughly 10–20x cheaper than Opus/Gemini Pro/GPT-5 class per the vendor; near the top of paid-model efficiency.
- **Overall Score: 79/100.** (78+72+95+65+85)/5 = 79.0. Best-in-class price/performance open-weights agent model of early 2026; the pick for high-volume agentic coding where frontier scores matter less than cost per task.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16
- Method: public internet research (MiniMax official launch post, llm-stats, BenchLM, DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
