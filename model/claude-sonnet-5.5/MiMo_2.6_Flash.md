# Claude Sonnet 5.5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** The second Claude 5.5-family model (released 2026-09-28, six days after Opus 5.5) — "best combination of speed and intelligence": near-Opus results on knowledge work and computer use at Sonnet pricing, 30%+ faster output, up to 30% lower cost per task via fewer tokens. Not a variant/alias of Sonnet 5 (which goes legacy, available to at least 2027-06-30).
- **Provider / access:** Claude API (`claude-sonnet-5-5`; dated ID `claude-sonnet-5-5-20260928`), Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud, Microsoft Foundry, Claude Platform on AWS, Claude apps/Code, GitHub Copilot. Messages API.
- **Release / knowledge:** released 2026-09-28; reliable knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5-5` (gateway routes) / `claude-sonnet-5-5` (native).
- **Context window:** 1,000,000 tokens (no 200K variant); max output 128K (300K on Batch API beta).
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking on; API default effort `high`, Claude Code/apps `medium`; `between_tools` = lowest setting); tool calls yes.
- **Pricing (as of 2026-10-07):** $2 in / $10 out per 1M (unchanged from Sonnet 5); cache read $0.20, 5m cache write $2.50, 1h $4; Batch API 50% off ($1/$5). Zero data retention available. Paid.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic, max effort, Claude Code `--bare`, 5 trials — rank 1/59 leaderboard) / **63.6%** (Artificial Analysis independent run).
- GDPval-AA v2.1: **1844** Elo (AA-run pre-release; vs Opus 5.5 1846). AA-Briefcase v1.1: **1811** Elo.
- AutomationBench (Zapier's run): **44.7%**. OSWorld 2.1: **80.1% partial / 43.5% strict**. Toolathlon-Verified: 77.8% pass@1.
- Tau3/Tau2 / Claw-Eval / Toolathon / MCP-Atlas / Terminal-Bench 2.1: no verified public score found.

Reasoning / knowledge:

- HLE: **56.9%** no tools, **64.5%** with tools (Anthropic; rank 4/134).
- AA Intelligence Index v4.3.2: **56** (#3 of 216, max effort; 55.98 — behind Opus 5.5 only). Sonnet 5 scored 38.
- LiveBench: **77.8**; Global MMLU 92.1; MILU 91.6; FrontierMath Tier 4 v2 80.5 with tools (rank 8/63); ArXivMath 86.8 no tools / 95.2 tools.
- GPQA Diamond: Anthropic did not publish; one third-party table claims 78.4% (unconfirmed) — treat as no verified public score found.
- CritPt / LCR / Omniscience / ARC-AGI: no verified public score found.

Coding:

- Terminal-Bench 4.0 as above (rank 1); Vibe Code Bench v1.1: **92.4%** (rank 1/63).
- SWE-bench Pro (Public): **81.3%** (max, rank 2/60); SWE-bench Multilingual **90.3%** (rank 2/29); SWE-bench Multimodal **54.3%** (rank 3/3).
- DeepSWE v1.1: **71.0%** (rank 10/49). FrontierCode 1.1 Main: **52.1%** (xhigh; 46.2% at max — max triggers a code-review routine that times out). FrontierSWE v2: 61.9% (Proximal run).
- CursorBench 4.0: **55.5%**; Terminal-Bench-Science 0.1: 59.9% (rank 3/20); Code Migration: 69.8% (rank 1/47); IOI (Vals v2) 83.1.
- SWE-bench Verified: one third-party claim of 82.4% (unconfirmed by Anthropic) — treat as provisional; LiveCodeBench/SciCode: no verified public score found.

Long context:

- ProgramBench: **79.7%** (Anthropic; Sonnet 5 77.3%, Opus 5.5 91.2%). MRCR / RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB4.0 70.6% (rank 1, AA-independent 63.6%), GDPval-AA 1844 at the 1750+ frontier ref, OSWorld 80.1%, AutomationBench 44.7% and Toolathlon 77.8% all top-tier; capped below 95 by no TB2.1/Tau3/Claw-Eval row.
- **Reasoning: 90/100.** HLE 56.9 no-tools clears the 40% ref by a wide margin, AA Index 56 is #3 overall (just under the 60+ frontier ref), plus strong FrontierMath/ArXivMath; GPQA unpublished holds it at 90.
- **Context window: 95/100.** 1M window at the ≥1M tier floor; ProgramBench 79.7% shows real long-context work but no ≥98% needle-retrieval result at 512K+.
- **Multimodal: 68/100.** Text + image in, text out = 60–70 band; strong visual work (Chartography 61.6%, OSWorld 2.1) but no video/audio/PDF input or non-text output.
- **Coding: 94/100.** Rank-1 TB4.0 (70.6%) and Vibe Code Bench (92.4%), SWE-bench Pro 81.3% (rank 2), Multilingual 90.3%, DeepSWE 71.0%, FrontierCode 52.1% — frontier-grade across the suite; capped at 94 by unverified SWE-bench Verified and no LiveCodeBench/SciCode rows.
- **Cost efficiency: 78/100.** $2/$10 sits well above the $1.25/$4.25 ≈ 88 anchor but clearly better than the $3/$15 ≈ 60 anchor (~76–78); $0.20 cache reads, 50% batch, and Anthropic's "up to 30% less per task" token efficiency push it to 78.
- **Overall Score: 88/100.** (92+90+95+68+94)/5 = 87.8 → 88 — best price/performance pick in the Claude 5.5 family: rank-1 terminal coding and near-Opus knowledge work at $2/$10; Opus 5.5 remains ahead on hard open-ended reasoning (ProgramBench 91.2 vs 79.7).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic announcement + platform docs, Apidog, The Decoder, LLMLearner, ClaudeAIHub, BuildFastWithAI, CellCog, AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
