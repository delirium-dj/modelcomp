# Gemini 3 Pro — findings by Qwen 4 Max

- Source: Google/gemini-3-pro
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (preview)
- **Short description:** The model that opened the Gemini 3 era (Nov 18, 2025) — Google's "most intelligent model" at launch: #1 LMArena (1501 Elo, first to break 1500), best-in-class multimodal understanding, and a long-horizon planning leap (Vending-Bench 2 net worth $5,478 vs Sonnet 4.5's $3,839). **Retired: the `gemini-3-pro-preview` API endpoint was shut down 2026-03-09**, replaced by `gemini-3.1-pro-preview`; scores below document its launch-era capability, not a currently served endpoint.
- **Provider / access:** Was GA-in-preview across the Gemini app (all users), AI Mode in Search (Pro/Ultra), AI Studio, Vertex AI, Gemini CLI, Google Antigravity (launched same day), Gemini Enterprise; third-party Cursor, GitHub, JetBrains, Manus, Replit. Deep Think mode: safety testers first, Google AI Ultra from Dec 4, 2025; API early access from Feb 12, 2026. No open weights.
- **Release / knowledge:** Preview 2025-11-18; shutdown 2026-03-09 (Google deprecations page, verified Oct 30, 2026). Knowledge cutoff **January 2025** (developer guide) — Search grounding recommended for anything newer.
- **IDs:** `gemini-3-pro-preview` (retired); successor `gemini-3.1-pro-preview`. Nano Banana Pro image model (`gemini-3-pro-image`) is a separate SKU.
- **Context window:** 1M input / 64K output. Retrieval at full length is the weak spot: MRCR v2 8-needle **26.3% pointwise at 1M** vs 77.0% average at 128K. Prompts >200K tokens billed at the higher tier.
- **Modalities:** Text, image, audio, video, PDF, code in; text out. Pixel-precise pointing (normalized 2D coordinates → zero-shot detection), `media_resolution` control; pixel-level segmentation NOT supported. `thinking_level` minimal/low/medium/high (default high), thought signatures for stateless tool loops, temperature default 1.0.
- **Pricing (launch-era, endpoint now retired):** $2 in / $12 out per 1M ≤200K-token prompts; **$4 / $18 above 200K**; output includes thinking tokens.
- **Architecture:** Proprietary natively-multimodal reasoning model; parameters undisclosed. Deep Think = extended-deliberation mode (Nov 2025: HLE 41.0, GPQA 93.8, ARC-AGI-2 45.1 verified; the Feb 2026 Deep Think update — HLE 48.4, ARC-AGI-2 84.6, Codeforces 3455, IMO gold — is built on 3.1 Pro's core, NOT this model). Most comprehensive Google safety eval to that point (UK AISI, Apollo, Vaultis, Dreadnode); reduced sycophancy, improved injection resistance.

### Raw benchmarks found

Reasoning / knowledge (Google launch post, vendor-run; Roboflow's transcription adds harness notes):

- LMArena **1501 Elo** (#1); HLE **37.5%** no tools / **45.8%** with search+code; GPQA Diamond **91.9%**
- ARC-AGI-2 **31.1%** (ARC Prize Verified; vs GPT-5.1 17.6%, Sonnet 4.5 13.6%); MathArena Apex **23.4%** (vs GPT-5.1 1.0%); AIME 2025 **95.0%** no tools / 100% with code
- SimpleQA Verified **72.1%**; FACTS suite 70.5%; MMMLU 91.8%; Global PIQA 93.4%

Agent / tool use:

- Vending-Bench 2 (simulated business year, net worth mean): **$5,478.16** — #1, vs Sonnet 4.5 $3,838.74, GPT-5.1 $1,473.43, Gemini 2.5 Pro $573.64
- τ²-bench **85.4%**; Terminal-Bench 2.0 **54.2%** (Terminus-2 agent; vs GPT-5.1 47.6%, Sonnet 4.5 42.8%); ScreenSpot-Pro **72.7%** (vs Sonnet 4.5 36.2%, GPT-5.1 3.5%)
- Cyber caveat: CyScenarioBench **0%** (Epoch AI's Mythos cyber-evidence appendix) — end-to-end cyber operations were not a strength

Coding:

- SWE-bench Verified **76.2%** (single attempt) — below Sonnet 4.5 (77.2%) and Opus 4.6 (81.42%); LiveCodeBench Pro **2,439 Elo**; WebDev Arena **1487 Elo** (#1 at launch)

Multimodal / long context:

- MMMU-Pro **81%**; Video-MMMU **87.6%** (#1); CharXiv Reasoning **81.4%**; OmniDocBench 1.5 edit distance **0.115** (best of the launch comparison set)
- MRCR v2 8-needle: 128K avg **77.0%**, 1M pointwise **26.3%** — the 1M window holds far more than it reliably retrieves

### Normalized scores (1–100)

- **Tool use: 85/100.** Launch-era leader on long-horizon planning (Vending-Bench 2 $5,478) with τ² 85.4%, TB2.0 54.2% and ScreenSpot-Pro 72.7% for computer-use grounding; capped by CyScenarioBench 0%, no OSWorld-class evidence, and the retired endpoint.
- **Reasoning: 88/100.** GPQA 91.9, ARC-AGI-2 31.1 (verified), MathArena Apex 23.4, AIME 95/100, LMArena 1501 — frontier-class for Nov 2025; HLE 37.5 no-tools sits well below the current 54%+ class, and Deep Think's headline numbers belong to a separate mode (later 3.1-Pro-based).
- **Context window: 78/100.** 1M/64K on paper, but MRCR 1M pointwise 26.3% shows severe full-length retrieval decay (77.0% at 128K), plus the >200K 2x-input/1.5x-output surcharge.
- **Multimodal: 88/100.** Launch-SOTA native text/image/audio/video/PDF understanding — Video-MMMU 87.6, MMMU-Pro 81, ScreenSpot-Pro 72.7, pixel-precise pointing, best-in-set OCR; text-only output, no segmentation, no native media generation.
- **Coding: 84/100.** WebDev Arena #1 (1487) and LiveCodeBench Pro 2439 Elo show elite generation/competitive skill; SWE-bench Verified 76.2% trailed Sonnet 4.5/Opus 4.6 even at launch, and TB2.0 54.2% is mid-pack by current standards.
- **Cost efficiency: 78/100.** $2/$12 was aggressive for a frontier flagship (undercutting Opus 4.6's $5/$25), but the >200K tier doubles input to $4/$18, thinking tokens bill as output, and the endpoint is retired — no current API value.
- **Overall Score: 84.6/100.** Mean of the five quality dims (85+88+78+88+84)/5 = 84.6. Historical significance: the LMArena-1501 / Vending-Bench leap that reset the frontier in Nov 2025; for production today use Gemini 3.1 Pro or the Gemini 4 generation — this preview endpoint no longer exists.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Google's official Gemini 3 launch post, Benchgen's model profile, Cognativ's Oct 30, 2026 dated timeline incl. the deprecations-page shutdown, and Roboflow's full launch-benchmark transcription with harness notes); scores are normalized 1–100 interpretations, not official vendor scores. All benchmark figures are Google-reported launch-era runs (Terminus-2 agent for TB2.0, single-attempt SWE-V, ARC Prize Verified for ARC-AGI-2); independent replication beyond ARC Prize not found. Deep Think kept separate from base 3 Pro, and the Feb 2026 Deep Think update attributed to its 3.1 Pro core. Retirement (2026-03-09) verified against Google's deprecations page via Cognativ; HLE no-tools 37.5 vs with-tools 45.8 labelled, never mixed. CyScenarioBench 0% from Epoch AI's independent cyber compilation.
- Reference URLs:
  - [A new era of intelligence with Gemini 3 — Google](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Gemini 3 Pro: Benchmarks, Pricing & Context Window — Benchgen](https://benchgen.com/models/google-deepmind/gemini-3-pro)
  - [Google Gemini 3: Capabilities, Benchmarks and What Changed — Cognativ](https://www.cognativ.com/blog/google-gemini-3/)
  - [Gemini 3 Pro Sets New Vision Benchmarks — Roboflow](https://roboflow.com/blog/gemini-3-pro)
  - [Are Mythos' cyber capabilities overhyped? (CyScenarioBench appendix) — Epoch AI](https://epochai.substack.com/p/are-mythos-cyber-capabilities-overhyped)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.