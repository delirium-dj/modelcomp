- Source: Anthropic/Claude Fable 5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first publicly available "Mythos-class" model, launched 2026-06-09 alongside Claude Mythos 5. It shares the Capybara base architecture with Mythos 5 but is a safety-limited public version with a two-stage classifier. A distinct release; Fable 5.1 (Sept) and 5.2 (Nov) are later versions, and the never-officially-released Azure catalog entry "Fable 5.5" is a separate identity.
- **Provider / access:** Claude API with model ID `claude-fable-5`; general public, developers and enterprise. Access was withdrawn shortly after launch under US national-security export controls (including a ban on non-US access), then approved for relaunch 2026-07-01. A zero-data-retention mode arrived with the 5.1 generation.
- **Release / knowledge:** 2026-06-09 (US Eastern); knowledge cutoff: no verified public score found.
- **IDs:** `claude-fable-5`. No free Zen ID verified.
- **Context window:** no verified Fable 5-specific context window in the retrieved sources — no verified public score found. (The 1M / 128K figures in the Baike article belong to the unreleased Fable 5.5 Azure catalog entry and are deliberately not attributed to Fable 5.)
- **Modalities:** text, document and image/screenshot in, text out; long-horizon multi-step tasks, scientific-chart data extraction, screenshot-based game play and web-app reconstruction from screenshots, code generation; extended reasoning; native tool use. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no official Fable 5 rate card in the retrieved Baike article; launch coverage reports **$10 / 1M input, $50 / 1M output** for the Fable 5 / Mythos 5 pair (about 2x Claude Opus 4.8), with 2x usage billing on claude.ai subscription plans. One user-run API-priced test cost $2.61 in 4m06s; AA measured Fable 5.1 at ~$3.76/task, ~20% above Fable 5.
- **Architecture:** Proprietary, closed weights; internal codename Capybara shared with Mythos 5. Two-stage safety classifier (activation probes + risk judgment) silently downgrades cyber / bio-weapon / distillation requests to Claude Opus 4.8; >95% of sessions never trigger it. Mandatory 30-day usage-data retention for security monitoring (not used for training). Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **80.3%** — real-world software engineering; the headline Fable 5 score
- Terminal-Bench-Science 0.1: **24.7%** (Fable 5.1 later 52.6%) — lineage comparison figure
- AutomationBench: **17.1%** (Fable 5.1 later 31.4%) — lineage comparison figure
- CursorBench 3.2.0: **70.5%** (Fable 5.1 later 73.4%) — lineage comparison figure
- Stripe early test: **50 million lines** of Ruby code migrated in one day; Slay-the-Spire-style long-horizon strategy tests with persistent file memory reached the final act **3x** more often and scored **3x** Claude Opus 4.8 (vendor-cited, no named harness score)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: no Fable 5 number published in the retrieved pages; its successor Fable 5.1 scored 53 (max) / 49 (medium) — lineage only
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Pro **80.3%** as above
- FrontierCode Diamond: **29.3%** — a notably weak high-quality/maintainable agentic-coding result
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 50-million-line one-day code migration and 3x long-horizon strategy improvement indicate strong long-task handling, but no MRCR / RULER / GraphWalks figure found — no verified public score found

Safety / market (context, not scored): a joint university team claimed a safety bypass in one conversation in under 5 seconds on launch day; Pliny the Liberator disclosed a bypass; Anthropic later published the CJS-0→CJS-4 Cyber Jailbreak Severity framework and a HackerOne project. After one month Fable 5 was 6% of Anthropic enterprise token consumption but 11.4% of spend; Ramp data across 70,000 companies showed ~11% of spend and plateauing.

### Normalized scores (1–100)

- **Tool use: 90/100.** 80.3% SWE-bench Pro and a 50M-line/day migration demonstrate strong real-world engineering; capped by very low AutomationBench (17.1%) and Terminal-Bench-Science (24.7%) and no scored computer-use figure.
- **Reasoning: 90/100.** Mythos-class reasoning with 3x long-horizon strategy gains over Opus 4.8; capped by zero published numeric reasoning benchmarks for this exact ID and by the safety classifier silently downgrading whole request classes.
- **Context window: 87/100.** Documented long-horizon, multi-step, persistent-memory task handling; capped because no Fable 5-specific token window or retrieval measurement could be verified (the 1M/128K numbers belong to another, unreleased version).
- **Multimodal: 83/100.** Scientific-chart extraction, screenshot-driven game play and web-app reconstruction from screenshots; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 91/100.** 80.3% SWE-bench Pro is a strong real-world software-engineering result; capped by a weak 29.3% FrontierCode Diamond and by the later 5.1 more than doubling its Terminal-Bench-Science score.
- **Cost efficiency: 44/100.** $10/$50 per 1M with 2x subscription usage, a high per-task cost and 11.4% of enterprise spend from only 6% of tokens; excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 90, 90, 87, 83, 91 = 88.2 → 88. Best fit: large legacy-codebase migrations and long document/chart workflows, superseded on almost every axis by the cheaper and stronger Fable 5.1 / Opus 5.5 generation.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Fable article (Fable 5 specs, SWE-bench Pro, FrontierCode Diamond, safety architecture, government timeline, market data), the Baidu Baike Claude 5 series article and the Baidu Baike Claude Mythos 5 article (shared-base/pricing context). Numbers measured under Fable 5.1 / Fable 5.5 / Mythos 5 IDs are explicitly labelled as lineage and never merged into Fable 5's own rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Fable — 百度百科 (Fable 5 specs, benchmarks, safety, timeline)](https://baike.baidu.com/item/Fable/68576242)
  - [Claude 5系列模型 — 百度百科 (series benchmark lineage)](https://baike.baidu.com/item/Claude%205%E7%B3%BB%E5%88%97%E6%A8%A1%E5%9E%8B/68556432)
  - [Claude Mythos 5 — 百度百科 (shared-base and pricing context)](https://baike.baidu.com/item/Claude%20Mythos%205/67936965)
