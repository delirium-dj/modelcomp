# Glyph Cluster — findings by Inkling 2 Small

- Source: Anonymous provider via Vercel AI Gateway (`stealth/glyph-cluster`); suspected Microsoft MAI Thinking 1 (tokenizer + behavioral evidence, unconfirmed)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster — stealth model
- **Short description:** An anonymous reasoning model served free during its stealth preview on Vercel AI Gateway since 2026-10-07 — text-only, 256K context, xhigh reasoning, positioned for coding and long-context analysis. Identity unclaimed; strongest lead points to Microsoft (o200k_base tokenizer, 24/24 phrase-count match with MAI Thinking 1; shared failure patterns on StealthMark) but nothing is confirmed.
- **Provider / access:** Vercel AI Gateway `stealth/glyph-cluster` (free during stealth; requires Pro/Enterprise plan + purchased AI Gateway credits; OpenAI-compatible API), Kilo (free anonymous tier), Command Code Go ($1/mo); OpenRouter/Vercel listing per folder metadata (`stealth/glyph-cluster`); Command Code agent via npm package. Text input only.
- **Release / knowledge:** Stealth since 2026-10-07 (Vercel changelog). Knowledge cutoff unknown.
- **IDs:** `stealth/glyph-cluster` (Vercel AI Gateway)
- **Context window:** 256,000 total; 256,000 max output — Vercel/listing (verified 2026-11-11)
- **Modalities:** Text in, text out; reasoning yes (low/medium/high/xhigh); no image input; prompts/completions may be retained by provider (zero data retention unavailable)
- **Pricing (as of 2026-11-11):** **Free** during the stealth preview ($0/$0) via free aggregator routes; Command Code Go $1/month alternative; provider may retain data for training
- **Architecture:** Closed weights, undisclosed; o200k_base tokenizer signature (matches Microsoft MAI and OpenAI GPT family — cannot distinguish between them from tokenization alone); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: reasoning effort selectable up to xhigh; no Tau-bench/MCP-Atlas measurement found — no verified public agentic score found
- OpenCode/Usage: listed on Kilo and Vercel Gateway — usage volume, not capability

Reasoning / knowledge:

- GPQA Diamond (Stealth Models research, 2026-10-09, 55-question subset): **56.4%** — 31/55 (same 50-question run reported 56.0%)
- StealthMark overall (2026-10-08, private demanding-task suite): **18.9/100** — rank 52/56; General Intelligence **12.0/100**; Visual Intelligence **29.8/100**
- Newton's Mirror (physical/spatial): **12.8** — rank 50/56; Ground Truth: **19.9** — rank 51/56
- Reasoning efficiency: single-step **77** (rank 6/54 — best-in-class efficiency), multi-step **35** (rank 30/52 — re-reasons every step)
- MMLU / HLE: no verified public score found

Coding:

- SWE-bench / LiveCodeBench / SciCode: no verified public score found
- SVG/visual coding adjacent: Selfie 32.4, Pelican 44.3, Beach 46.3 — weak-to-mid

Long context:

- No MRCR/RULER retrieval measurement found; 256K window vendor-documented only

Command-line / games:

- Foresight (planning): **6.4/100** — rank 49/52; Latch: **3.6/100** — rank 49/53

### Normalized scores (1–100)

- **Tool use: 31/100.** xhigh reasoning + tool calls are documented, but no agentic success-rate benchmark exists; planning games (Foresight 6.4, Latch 3.6) imply weak multi-step tool discipline.
- **Reasoning: 42/100.** GPQA Diamond 56.4% (55-item subset, one independent lab) is real but far below frontier; StealthMark General 12.0 (rank 52/56) pulls the reading down; single-step efficiency 77 is genuinely excellent.
- **Context window: 52/100.** 256K/256K documented; zero independent retrieval evidence — effective long-context performance unknown.
- **Multimodal: 15/100.** Text-only — floor per methodology.
- **Coding: 26/100.** Positioned for coding, but no published code benchmark; SVG-coding visuals 32–46 and planning-game collapse imply weak agentic software work today.
- **Cost efficiency: 100/100.** $0/$0 during the stealth preview (with data-retention cost).
- **Overall Score: 33/100.** Mean of (31 + 42 + 52 + 15 + 26) / 5 = 166/5 = 33.2 → 33. A free, anonymous, decent-on-GPQA-but-weak-on-hard-planning stealth model — worth a look for curious evaluation and GPQA-style QA at zero cost; not for production agents or sensitive data.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-11
- Method: public internet research (Vercel/launch posts, Stealth Models independent benchmarks, trackers); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: free evaluation of an anonymous reasoning preview; never send proprietary data — prompts may be retained for training.
- Reference URLs:
  - [Stealth Models — Glyph Cluster model guide (benchmarks, tokenizer evidence, GPQA 56.4%)](https://stealthmodels.com/glyph-cluster)
  - [Stealth Models — Glyph Cluster benchmarks (StealthMark 18.9/100, rank 52/56)](https://stealthmodels.com/benchmarks/models/glyph-cluster)
  - [Vercel Changelog — Glyph Cluster available in stealth for free on AI Gateway](https://vercel.com/changelog/glyph-cluster-is-now-available-in-stealth-for-free-on-ai-gateway)
  - [AnyRouter — stealth/glyph-cluster routing details](https://www.anyrouter.dev/model/stealth/glyph-cluster)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
