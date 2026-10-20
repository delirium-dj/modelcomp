# Claude Sonnet 5.5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** The second model in Anthropic's Claude 5.5 family — a faster, lower-cost complement to Opus 5.5, strongest at well-scoped everyday tasks, bug fixing and polished documents/slides/spreadsheets, with a sharp eye for design. A dramatic upgrade over Sonnet 5.
- **Provider / access:** Claude Platform (`claude-sonnet-5-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry; Claude apps. Messages API.
- **Release / knowledge:** Released 2026-09-28; reliable knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-sonnet-5-5` (no free Zen ID; mid-tier paid).
- **Context window:** 1,000,000 tokens input; 128,000 tokens max output (Claude Platform docs).
- **Modalities:** text + image in → text out; reasoning yes (Adaptive thinking; default effort `high`, faster than Opus 5.5); tool calls yes (batches tool calls more than Sonnet 5); computer use (OSWorld) and image understanding — first Sonnet to beat Pokémon Red from screenshots alone.
- **Pricing (as of 2026-10-20):** $2 / 1M input, $10 / 1M output (same as Sonnet 5); cache reads $0.10 (half of Sonnet 5's $0.20); up to 30% less per task and 30%+ faster than Sonnet 5.
- **Architecture:** proprietary (closed weights); cyber safeguards comparable to Opus 5 (first Sonnet with cyber safeguards + fallbacks).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (agentic coding — **leads Opus 5.5's 66.4%**; a huge jump from Sonnet 5's 10.3%)
- OSWorld 2.1 (computer use): **80.1%** partial (just behind Opus 5.5 81.8%; Sonnet 5 was 57.0%)
- GDPval-AA v2.1: **1844 Elo** (two points below Opus 5.5's 1846; Sonnet 5 was 1449)
- AA-Briefcase v1.1 (long-horizon knowledge work): **1811 Elo** (Opus 5.5 1822; Sonnet 5 1359)

Reasoning / knowledge:

- Humanity's Last Exam: **64.5%** with tools (behind Opus 5.5 67.7%; up from Sonnet 5's 54.9%)
- GPQA Diamond: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- FrontierCode 1.1 (Main): **46.2%** at Max / **52.1%** at Xhigh (Opus 5.5 54.4%; +10 pts over Sonnet 5 at High effort for ~1/15 the cost)
- CursorBench 4.0: **55.5%** (within ~2 pts of Opus 5.5's 57.8%; Sonnet 5 was 34.1%)
- SWE-bench Verified / LiveCodeBench: no verified public score found in the launch post

Multimodal:

- Chartography (visual chart recognition): **61.6%** no tools (Opus 5.5 64.4%; Sonnet 5 was 15.6%)
- Image understanding: first Sonnet to beat Pokémon Red working only from screenshots

Long context:

- 1M-token window; no MRCR/RULER figure published — "no long-context retrieval reported".

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 4.0 70.6% actually leads Opus 5.5, with OSWorld 2.1 80.1% and GDPval-AA 1844 near the flagship; capped only by AA-Briefcase/OSWorld sitting a hair under Opus 5.5.
- **Reasoning: 92/100.** GDPval-AA 1844 (within 2 Elo of Opus 5.5) and HLE 64.5% with tools are near-frontier; held below the ceiling by HLE trailing Opus 5.5's 67.7% and no GPQA figure.
- **Context window: 98/100.** 1M-token input with 128K output; near the top, a touch below perfect absent a published long-context retrieval benchmark.
- **Multimodal: 83/100.** Chartography 61.6% (no tools) is a massive jump over Sonnet 5's 15.6% and screenshot-only Pokémon Red shows real image understanding; capped as it still trails Opus 5.5's 64.4% and lacks a broad vision benchmark.
- **Coding: 93/100.** Terminal-Bench 4.0 70.6% (best in the compared set), CursorBench 55.5% within ~2 pts of Opus 5.5 and FrontierCode 52.1% at Xhigh; capped by FrontierCode/CursorBench still trailing Opus 5.5 at the top effort.
- **Cost efficiency: 92/100.** $2/$10 with $0.10 cache reads, 30%+ faster and up to 30% cheaper per task than Sonnet 5 while approaching Opus 5.5 — outstanding value; not 100 because it is a paid tier (no $0 lane).
- **Overall Score: 92/100.** Mean of Tool 93 + Reasoning 92 + Context 98 + Multimodal 83 + Coding 93 = 91.8 → 92. Best fit: high-volume everyday agentic coding, bug fixing and document/design work where near-Opus quality at a fifth of the cost matters; Opus 5.5 remains the pick for complex open-ended judgment.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Anthropic's "Introducing Claude Sonnet 5.5" launch post benchmark table; Claude Platform docs for context/pricing specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
