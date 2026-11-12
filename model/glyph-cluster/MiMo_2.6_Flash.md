# Glyph Cluster — findings by MiMo 2.6 Flash

- Source: anonymous stealth model (`stealth/glyph-cluster` on Vercel AI Gateway), analyzed by Stealth Models
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster (free stealth preview; developer unknown)
- **Short description:** Anonymous reasoning model for coding and long-context analysis, listed in stealth on Vercel AI Gateway since 2026-10-07 and in the Command Code Go agent; independent analyst Stealth Models' evidence (tokenizer signature `o200k_base` matching on 24/24 probe phrases, shared Newton's Mirror failure pattern, distinctive Beach figures) points to **Microsoft's MAI Thinking 1** as the likely origin — a lead, not a confirmation, and no proven link to any model folder in this repo.
- **Provider / access:** Vercel AI Gateway `stealth/glyph-cluster` — OpenAI-compatible Chat Completions, Responses API and AI SDK (base URL `https://ai-gateway.vercel.sh/v1`); free during the stealth period but gated to Pro/Enterprise teams **with purchased Gateway credits**; also bundled in Command Code Go ($1/month, up to 100 free model requests/day). No OpenCode Console/Zen entry as of 2026-11-12.
- **Release / knowledge:** first seen 2026-10-07 (Vercel changelog same day; Stealth Models case file opened 2026-10-07); knowledge cutoff not published.
- **IDs:** `stealth/glyph-cluster` (Vercel); HF case-file repo `stealth-model/glyph-cluster` (documentation only, no weights); no open weights.
- **Context window:** 256K tokens (Vercel model page and changelog); max output not published.
- **Modalities:** text in / text out only — image and file inputs and structured outputs are **not** supported (Vercel); reasoning yes (effort low/medium/high/xhigh); tool calls yes (function calling); streaming yes.
- **Pricing (as of 2026-11-12):** $0 model tokens during the stealth preview (Vercel) — but requires a paid Pro/Enterprise plan plus purchased AI Gateway credits; Command Code route $1/month for 100 req/day. **Privacy caveat (Vercel):** Zero Data Retention unsupported — prompts and responses may be retained and used for training.
- **Architecture:** undisclosed (stealth); measured output speed 69 tok/s (Stealth Models). Speculation: Microsoft MAI-derived checkpoint (tokenizer + failure-pattern match).

### Raw benchmarks found

> All rows are **independent third-party runs by Stealth Models** (stealthmodels.com, StealthMark 1.8.10, 2026-10-08/09) — not vendor numbers. No Artificial Analysis or BenchLM page exists for this ID (BenchLM 404, checked 2026-11-12).

Reasoning / knowledge:

- GPQA Diamond: **56.4%** (31/55, Stealth Models' 55-question subset, 2026-10-09; 56.0% = 28/50 on the shared 50-question comparison set)
- StealthMark General Intelligence: **12.0/100** (spatial & physical reasoning composite)
- StealthMark overall: **18.9/100 — rank 54/58** (higher than MAI Thinking 1's 14.1 and Nemotron 3 Ultra's 16.7 on the same harness)
- HLE / LCR / MMLU-Pro / Intelligence Index: no verified public score found

Agent / tool use:

- StealthMark planning games: Foresight **6.4/100** (rank 51/54, survived 0 of 3 levels), Latch **3.6/100** (rank 51/55, cleared 1 of 5)
- Reasoning efficiency (StealthMark): single-step **78** (rank 6/56), multi-step **35** (rank 28/54)
- Terminal-Bench / Tau3 / GDPval / MCP Atlas / OSWorld: no verified public score found (function calling documented but unbenchmarked)

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / Terminal-Bench / SciCode: no verified public score found (positioning as "a reasoning model for coding" per Vercel; no measured row anywhere)
- Proxy: seven SVG scene-construction tasks (all scored as code output) — Beach **46.3** (best, rank 47/58), Pelican **44.3**, Raccoon **35.7**, Selfie **32.4**, Ground Truth **19.9**, Newton's Mirror **12.8**, Mona Lisa **11.7** (Stealth Models, 2026-10-08)

Visual construction (StealthMark): Visual Intelligence **29.8/100** — SVG-code drawing, not image input/output; the model itself accepts no visual input.

Long context: 256K advertised; **no MRCR / RULER / retrieval score found**.

### Normalized scores (1–100)

- **Tool use: 48/100.** Function calling is supported and the model ships inside coding agents, but there is not a single agentic harness number (Terminal-Bench, Tau3, GDPval, MCP Atlas all absent) and StealthMark's planning games are bottom-tier (Foresight 6.4, Latch 3.6, ranks ~51st of ~55) — capability plus negative planning evidence lands mid-low.
- **Reasoning: 55/100.** GPQA Diamond 56.4% sits just under the methodology's 60–80% mid band, StealthMark General Intelligence is 12.0/100 in the bottom third of the field, and no HLE/LCR/Index row exists; only reasoning-token efficiency (single-step rank 6/56) argues upward, so mid-low stands.
- **Context window: 72/100.** 256K falls in the 200K–500K tier (65–84) near the middle, with no retrieval-at-depth measurement published to justify the upper half.
- **Multimodal: 15/100.** Text-only in and out — Vercel explicitly states image/file inputs are unsupported; SVG drawing happens in text, not in the modality.
- **Coding: 50/100.** The product pitch is coding, but zero verified public coding scores exist (no SWE-bench/LiveCodeBench/Terminal-Bench row anywhere); the only proxy — SVG code tasks — ranges from 46.3 down to 11.7 with physical/precision tasks weakest, so it scores at the neutral floor for missing evidence.
- **Cost efficiency: 95/100.** $0 model tokens during the stealth preview matches the free-tier top band, held back five points because access requires a paid Pro/Enterprise plan with purchased credits (or the $1/month Command Code Go route) and because ZDR is unavailable — prompts may be retained and used for training.
- **Overall Score: 48/100.** (48 + 55 + 72 + 15 + 50) / 5 = 48.0 → 48 — best-fit: a no-cost sandbox for experimenting with a MAI-class coding/long-context model on non-sensitive code, not a model to standardize on while its identity, benchmarks and permanence are all unconfirmed.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (Vercel changelog and model page, Stealth Models independent case file and benchmark runs, Hugging Face case-file repo); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Stealth Models — Glyph Cluster case file (specs, GPQA run, identity verdict, 2026-10-09)](https://stealthmodels.com/glyph-cluster)
  - [Stealth Models — Glyph Cluster benchmark scores (StealthMark 18.9, GPQA, games, SVG tasks)](https://stealthmodels.com/benchmarks/models/glyph-cluster)
  - [Vercel Changelog — Glyph Cluster is now available in stealth for free on AI Gateway (2026-10-07)](https://vercel.com/changelog/glyph-cluster-is-now-available-in-stealth-for-free-on-ai-gateway)
  - [Hugging Face — stealth-model/glyph-cluster (case file, StealthMark panels)](https://huggingface.co/stealth-model/glyph-cluster)
  - [Stealth Models — Glyph Cluster vs MAI Thinking 1 comparison](https://stealthmodels.com/compare/glyph-cluster-vs-mai-thinking-1)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
