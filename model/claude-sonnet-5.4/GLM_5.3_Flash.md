# Claude Sonnet 5.4 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-5-4`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4 (API id `claude-sonnet-5-4`; third-party boards index this generation's system card under the "Claude Sonnet 5" launch name — figures below are cited with their source as published)
- **Short description:** Anthropic's mid-2026 workhorse Sonnet: 1M-token context, adaptive thinking, sub-turn checkpointing and computer use, tuned for everyday coding and long-document agentic work at mid-frontier pricing.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com`, id `claude-sonnet-5-4`); OpenCode Zen `opencode/claude-sonnet-5.4`. Chat/messages API (no Responses endpoint).
- **Release / knowledge:** The 5.4 generation is documented from early 2026 (an "Extended" variant appears in March 2026 usage notes); the system-card benchmark set was published with the June 30, 2026 launch coverage. Knowledge cutoff not published.
- **IDs:** `claude-sonnet-5-4` (Anthropic API); `opencode/claude-sonnet-5.4` (Zen). No Free ID exists on Zen.
- **Context window:** 1,000,000 tokens total; 128,000 max output (provider config and Vals run parameters; launch notes mentioned a 64K output cap at introduction, later listings carry 128K).
- **Modalities:** Text, image in; text out. Adaptive thinking (level-mapped, not fully off-switchable per provider config); tool calling yes; computer use yes; sub-turn checkpointing for long agentic runs.
- **Pricing (as of 2026-11-01):** OpenCode Zen $2.50/$12.50 per 1M in/out, $0.25 cached read (paid only). Launch coverage: $2/$10 introductory through Aug 31, 2026, then $3/$15 list.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic system card, via benchlm/anotherwrapper indexing); Vals independent 3-run average **74.5%** (71.9–78.7% spread, run at "high" effort)
- Terminal-Bench 3.0: **14.6%** (Terminal-Bench 3.0 leaderboard — sharp drop on the newer harness)
- OSWorld-Verified (computer use): **81.2%** (system card); OSWorld 2.1 **57.0%** (system card)
- BrowseComp: **84.7%** (system card)
- GDPval-AA: **Elo 1,603** (system card) / **48.2%** (Artificial Analysis run)
- AA Agentic Index: **44.3%** (Artificial Analysis); AA Tau3-Banking **37.3%**; AA EnterpriseOps-Gym **44.7%**
- ApprenticeBench: **16%** (NeoCognition); MazeBench **0%** (ASCII mode)
- Vals Index: **68.61%** (#3 of suite at publication, behind Fable 5 and Opus 4.8; +8.5 over Sonnet 4.6)

Reasoning / knowledge:

- HLE: **57.4%** with tools / **43.2%** without (system card); AA-HLE **41.3%**
- GPQA Diamond (Vals): **88.9%**; AA-GPQA Diamond **91.1%** (Anthropic published no GPQA figure itself)
- MMLU-Pro (Vals): **87.5%**
- LABBench2: **80.1%**; SimpleBench **60.6%**; AAII (Artificial Analysis Intelligence Index) **38.2%**
- Evidence-retention (judge-style long-context selection): **78.18%** (independent Some Incredible Code analysis)

Coding:

- SWE-bench Verified: **85.2%** (system card — Anthropic's first generation to clear 80% at launch); Vals independent **75.49%** (slight slip vs Sonnet 4.6's 77.45% in the same harness)
- SWE-bench Pro: **63.2%** (system card); SWE-bench (Vals) **79.6%**
- LiveCodeBench (Vals): **82.4%**; Vibe Code Bench **86.9%** (Vals, +30.7 over Sonnet 4.6)
- AA Coding Index: **71.5%**; AA-SciCode **54.3%**
- CursorBench 3.2: **61.5%**; CursorBench 4.0 **34.1%**; FrontierCode 1.1 **42.7%**
- SWE Multilingual: **78.3%**; Code Migration (early Vals lane) **44.4%**

Long context / multimodal:

- No long-context retrieval figure verified beyond the 1M window itself (Vals ran its suite at full context).
- SWE-bench Multimodal: **28.1%** (system card — weak image-grounded coding); no MMMU/MMMU-Pro figure found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong agentic card set (TB2.1 80.4, OSWorld-Verified 81.2, BrowseComp 84.7, GDPval 1603 Elo) capped by the TB3.0 collapse (14.6), mid AA Agentic Index (44.3), and Vals' more conservative 74.5 TB2.1.
- **Reasoning: 87/100.** HLE 57.4 with tools is strong; GPQA Diamond ~89–91 across Vals/AA and MMLU-Pro 87.5 agree on high reasoning; AAII 38.2 keeps it below the Opus/Fable tier.
- **Context window: 90/100.** Verified 1,000,000-token window (Vals ran its suite on it) in the top tier; 128K max output; retrieval-specific published figures are thin.
- **Multimodal: 62/100.** Image input supported and computer-use capable, but the only published multimodal eval (SWE-bench Multimodal 28.1) is weak and no general vision benchmark figure was found.
- **Coding: 87/100.** SWE-V 85.2 card figure with Vibe Code Bench 86.9 and Vals LCB 82.4 confirming a top coding tier; capped by SWE-Pro 63.2, FrontierCode 42.7 and the weak CursorBench 4.0.
- **Cost efficiency: 62/100.** Zen $2.50/$12.50 per 1M (cached $0.25) — upper-mid pricing, no free lane; noticeably cheaper than Opus-class but well above flash/mini tier.
- **Overall Score: 81/100.** Mean of the five quality dims (80+87+90+62+87)/5 = 81.2 → 81. Best fit: high-volume everyday coding and long-context agentic work where Opus-class pricing is hard to justify.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (independent leaderboard indexing, Vals AI published runs, benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [benchlm.ai — Claude Sonnet 5 (system-card indexed) benchmark table](https://benchlm.ai/models/claude-sonnet-5)
  - [AnotherWrapper — Claude Sonnet 5 percentile board (SWE-V 85.2, HLE 57.4, OSWorld 81.2)](https://anotherwrapper.com/tools/llm-pricing/claude-sonnet-5)
  - [Vals AI — published model evaluations (Sonnet generation runs, 1M context, 128k output)](https://www.vals.ai/home)
  - [iternal.ai — 2026 launch timeline (June 30 launch, 1M context, intro pricing)](https://iternal.ai/llm-selection-guide)
  - [Some Incredible Code — Claude Sonnet 5.4 evidence-retention analysis](https://cephalochromoscope.net/17078176-e991-451b-bd74-4b02affe4dec)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
