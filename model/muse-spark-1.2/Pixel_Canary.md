# Muse Spark 1.2 Free — findings by Pixel Canary

- Source: Meta Superintelligence Labs / Muse Spark 1.2, **free Contributor tier** (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free — the prior-generation Meta Superintelligence Labs multimodal reasoning model for long-horizon coding and whole-repository agentic work, reachable at $0 through OpenCode Zen's Contributor tier (training-data consent in exchange for access).
- **Short description:** The previous generation of the same family as Muse Spark 1.3: identical $0 / $0.10 / $1.25 tier structure and the same 1M-token window, but a markedly weaker measured profile — 14 points of tracker score below 1.3, with only 2 benchmark families of coverage.
- **Provider / access:** Meta Model API (`muse-spark-1.2`, `meta/muse-spark-1.2`) in standard and contributor tiers; 14 tracked offerings incl. OrcaRouter, DevPass (LLM Gateway), Kilo Gateway, Abacus, Opper at $1.25 / $4.25 and AIHubMix at $1.38 / $4.68. The free tier exists only on OpenCode Zen under the Contributor consent scheme.
- **Release / knowledge:** released 2026-08-05; knowledge cutoff **not published** (LLMBoard lists Unknown) — no verified public figure.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (free), `muse-spark-1.2`, `meta/muse-spark-1.2`. Free tier: yes — Contributor consent tier on OpenCode Zen.
- **Context window:** 1,048,576 (1M) input / **131,072 (131.1K) max output** tokens. Note the regression against the newer release: Muse Spark 1.3 advertises a 943.7K output budget, so 1.2's practical long-run output ceiling is ~7× smaller.
- **Modalities:** image, text and video in; text out (tracker specification). Local `meta.json` additionally claims audio and PDF input — audio is not corroborated by the tracker or by any audio benchmark for this ID, so the conservative image/text/video reading is used. Tool use (MCP / terminal) and vision yes; no generation output.
- **Pricing (as of 2026-09-27):** **Free** Zen Contributor tier ($0 with training-data consent); Contributor paid tier $0.10 / $0.20 per 1M; Standard $1.25 / $4.25 per 1M (Meta official, matched by OrcaRouter/DevPass/Kilo/Abacus/Opper), AIHubMix $1.38 / $4.68. Cache-read and batch rates not published (no verified public figure).
- **Architecture:** proprietary, parameters undisclosed, open weights no. LLMBoard has **no separate profile for the free variant** (`/models/muse-spark-1-2-free` is absent), so all capability evidence below is from the shared `muse-spark-1-2` profile — appropriate, since the free tier ships the same weights.

### Raw benchmarks found

> LLMBoard profile for Muse Spark 1.2 (evaluations 2026-09-13 → 2026-09-27): 24 rows published, coverage flagged as **80% over only 2 benchmark families** — a broad-looking table built on a narrow evidence base; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **77.6**.

Coding / agent:

- Terminal-Bench 2.1: **82.90%** (#19/42)
- DeepSWE 1.1: **59.30%** (#22/38) — 16 points behind Muse Spark 1.3's 75.40% (#1/38) on the identical test
- Meta Internal Coding Bench: **70.60%** (#1/1 — self-reported internal set, single participant, no ranking value)
- LM Arena Agent Bash Recovery Steps: **6.25%** (#8/39); LM Arena Agent Tool Hallucination: **0.33%** (#20/39, lower is better)
- GDPval-AA, OSWorld 2.0, SWE-bench Verified/Pro, tau-bench family, MCP Atlas: no verified public score found

Reasoning / knowledge:

- LiveBench reasoning (2026-06-25): **90.00** score (#6/41); LiveBench math **91.20** (#14/41); LiveBench instruction **74.33** (#10/41)
- AA HLE (text, no tools): **45.46%** (#14/200); AA CritPt **17.71%** (#19/200) — solid but far from the 55–60% band of the 2026 frontier
- LM Arena Text: **1485.84** (#11/218); Text Factuality **1483.88** (#6/128); Text Style Control **1496.17** (#6/218)
- GPQA / Omniscience / SimpleQA rows for this ID: not present — no verified public score found

Science / code understanding: AA SciCode Subtasks **57.41%** (#10/89).

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval score published for this ID** — unlike Muse Spark 1.3 (MRCR v2 98.50%), the 1M window here is unverified by measurement.

Vision: LM Arena Vision **1303.88** (#11/111); Vision Style Control **1291.54** (#7/111).

Runtime: **no provider speed or latency record exists** for this ID ("No runtime data") — throughput cannot be verified, in contrast with the 1.3 endpoint's measured 5.06 tok/s.

### Normalized scores (1-100)

- **Tool use: 76/100.** Terminal-Bench 2.1 82.90% (#19/42) is a respectable absolute score and LM Arena Agent Tool Hallucination 0.33% (#20/39) means it rarely invents tools, but Bash Recovery 6.25% (#8/39) and DeepSWE 59.30% (#22/38) place it mid-pack, and no GDPval/OSWorld/tau-class row exists.
- **Reasoning: 76/100.** LiveBench reasoning 90.00 (#6/41) on a contamination-resistant dated set and Text Factuality 1483.88 (#6/128) are genuinely good; AA HLE 45.46% (#14/200) and CritPt 17.71% (#19/200) confirm it sits a clear tier below the 2026 frontier, and no Omniscience row quantifies abstention.
- **Context window: 80/100.** The 1M input window is real, but the 131.1K output ceiling is a fifth of the successor's, and unlike Muse Spark 1.3 there is **no measured retrieval evidence** at length for this ID.
- **Multimodal: 74/100.** Image, text and video input with LM Arena Vision 1303.88 (#11/111) and Vision Style Control 1291.54 (#7/111) as corroboration; the `meta.json` audio claim is uncorroborated, no video-understanding benchmark exists, and output is text only.
- **Coding: 74/100.** Terminal-Bench 2.1 82.90% (#19/42) plus AA SciCode Subtasks 57.41% (#10/89) is a competent but unremarkable profile, and the only 70%+ figure comes from a single-participant internal Meta benchmark with no ranking value.
- **Cost efficiency: 92/100.** A real $0 tier plus $0.10 / $0.20 Contributor and $1.25 / $4.25 standard pricing across 14 providers is excellent value; docked because no throughput measurement exists and the consent-based free tier carries a privacy cost.
- **Overall Score: 76/100.** Half-up mean of (76 + 76 + 80 + 74 + 74) = 380 / 5 = 76.0, Cost excluded. Cross-check: the independent LLMBoard composite is 77.6 - agreement within 1.6 points. Best fit: free-tier prototyping, homework-grade coding and long-context document reading where the consent tier's cost is decisive; teams that need real agentic coding should move up to Muse Spark 1.3, which scores 15 points higher here and 13.7 points higher on the tracker.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard profile `muse-spark-1-2` incl. provider pricing and runtime tables + local `meta.json` for the free/Contributor tier structure; the tracker has no separate profile for the free variant); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
