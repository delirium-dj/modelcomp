# GPT 5.2 — findings by Ling 3.1 Flash

- Source: OpenAI (`opencode/gpt-5.2`; API `openai/gpt-5.2`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2
- **Short description:** OpenAI's December-2025 flagship (Thinking/Instant/Pro tiers, new xhigh effort) — launch state-of-the-art on GDPval, ARC-AGI-2 and MRCRv2 long-context reasoning; the first model near 100% on the 4-needle MRCR variant out to 256K tokens; GPT-5.2 Pro ($21/$168) is the higher tier.
- **Provider / access:** OpenAI API (`gpt-5.2`, `gpt-2-chat-latest` family), ChatGPT paid plans (GPT-5.1 sunset after 3 months); Responses `/compact` endpoint extends the effective window for long tool-heavy workflows.
- **Release / knowledge:** 2025-12-11; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `opencode/gpt-5.2`.
- **Context window:** 400,000 tokens (per OpenAI API docs). NOTE: the repo `meta.json` stub says "128K total" — stale; official docs and third-party trackers report 400K.
- **Modalities:** text in/out; image input only (per OpenAI API docs). NOTE: `meta.json` says "Text in/out" — stale; the model card and CharXiv/bounding-box examples confirm image input. No audio/video input.
- **Pricing (as of 2026-10-02):** $1.75/$14.00 per 1M input/output; cached input $0.175/M (90% off); `gpt-5.2-pro` $21/$168.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (GPT-5.2 Thinking unless noted):

- Terminal-Bench 2.0: **64.7%** (Droid harness, 2025-12-24 leaderboard; also 64.9% third-party; independent rerun: 53.9% original, 59.6% after retries)
- GDPval (wins or ties): **70.9%** (vs GPT-5.1 38.8%) — SOTA at launch
- SWE-Lancer IC Diamond: **74.6%** (vs GPT-5.1 69.7%)
- BrowseComp Long Context: **92.0%** (128K) / **89.8%** (256K)
- GraphWalks (<128K): **94.0%** bfs / **89.0%** parents
- Tau2-Bench / Claw-Eval / GDPval-AA / Agents' Last Exam: no verified public score found for GPT-5.2 (non-Codex)

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (Thinking) / **93.2%** (Pro)
- Humanity's Last Exam (no tools): **34.5%** (Thinking) / **36.6%** (Pro); **45.5%** with search+Python (Pro: 50.0%)
- FrontierMath (w/ Python): Tier 1–3 **40.3%**, Tier 4 **14.6%**
- ARC-AGI-1 Verified: **86.2%**; ARC-AGI-2 Verified: **52.9%** — SOTA at launch
- AIME 2025 (no tools): **100.0%**; HMMT Feb 2025 (no tools): **99.4%** (Pro: 100%)
- MMMLU: **89.6%**; CharXiv Reasoning (w/ Python): **88.7%**
- ARMES empirical HLE: **37.7%**

Coding:

- SWE-bench Verified: **80.0%** (official launch high; third-party rerun 73.8%)
- SWE-bench Pro: **55.6%** — SOTA at launch (vs GPT-5.1 50.8%)
- LiveCodeBench: **88.9%** (#10 at launch)
- SciCode: **52.1%** (third-party)
- DeepSWE / AA Coding Index / Vibe Code Bench: no verified public score found for GPT-5.2 (non-Codex)

Long context:

- 400K window; OpenAI MRCRv2 (8 needles): **98.2%** (4–8K), **89.3%** (8–16K), **95.3%** (16–32K), **92.0%** (32–64K), **85.6%** (64–128K), **77.0%** (128–256K); near-100% on the 4-needle variant out to 256K; BrowseComp LC and GraphWalks above

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 64.7% sits just above the mid band (45–60% → 50–70), with GDPval 70.9% wins-or-ties (launch SOTA), SWE-Lancer 74.6% and GraphWalks 94.0% as offsets; GDPval-AA/Tau2/ALE unpublished for the non-Codex model.
- **Reasoning: 84/100.** GPQA Diamond 92.4% clears the 90%+ frontier bar and HLE 45.5% (with search+Python) clears the 40%+ bar; HLE no-tools 34.5%, FrontierMath T4 14.6% and ARC-AGI-2 52.9% (all far below 2026 frontier levels) cap the score despite saturated AIME/HMMT results.
- **Context window: 76/100.** 400K window (between the 200K=70 and 1M=95 anchors); MRCRv2 98.2% only at 4–8K, falling to 77.0% at 128–256K — no ≥98% retrieval at 512K+, so a higher score is not justified.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70) per the official API docs; no audio/video input.
- **Coding: 81/100.** SWE-bench Verified 80.0% (official) and LiveCodeBench 88.9% are strong, but Terminal-Bench 2.0 64.7% (under the 85% bar), SciCode 52.1% (just under the 55% reference) and SWE-bench Pro 55.6% (below 2026 mid-tier) cap the score.
- **Cost efficiency: 71/100.** $1.75/$14 per 1M interpolates between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references to ~71; 90% cached-input discount and the vendor's claim of lower cost-per-quality via token efficiency are offsets.
- **Overall Score: 76/100.** (72+84+76+65+81)/5 = 75.6 → 76 — a late-2025 frontier model still top-band on GPQA and launch-era SOTA claims (GDPval, ARC-AGI-2, MRCRv2), but held down by its 400K window, image-only input, and mid-tier 2026 agentic-coding numbers (TB2.0 64.7%, SciCode 52.1%).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.2 launch, OpenAI API docs, airank.dev TB2.0 leaderboard, themodelbeat, Model Beats, ARMES); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_2.md`, using the same headings.
