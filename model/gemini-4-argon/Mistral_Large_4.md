# Gemini 4 Argon — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's flagship Gemini 4 frontier reasoning model (first of the Gemini 4 family; not a fine-tune of a prior model), built for long-horizon software engineering, enterprise knowledge work (legal/finance), and cybersecurity defense. Distinct from the later, not-yet-GA Gemini 4 Carbon sibling.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-4-argon`, stable), Vertex AI ("Google" provider), Gemini app (Google AI Pro/Ultra), Google Antigravity, AI Mode in Search, Gemini for business. Generative Language / Vertex GenerateContent API (plus Interactions API for long-decode background runs). Announced 2026-09-30 to Fairwind Program trusted cyber defenders; API general availability 2026-10-13.
- **Release / knowledge:** Announced 2026-09-30, GA 2026-10-13 (model card published 2026-10-13, updated October 2026); knowledge cutoff March 2026.
- **IDs:** `gemini-4-argon` (Gemini API stable ID); Vertex model name `gemini-4-argon`; no free-tier API ID verified — paid tier pricing below.
- **Context window:** 1,048,576 tokens unified input+output (shared across input, thinking, output — not a separate 1M output allowance); max output 65,536 default synchronous, up to 1,048,576 with "long decode" (64K hops stitched via Interactions API `background: true`) — per ai.google.dev model page.
- **Modalities:** Inputs text, image, video, audio, PDF; output text. Thinking (low/medium/high) supported; function calling, structured outputs, code execution, computer use, search/Maps grounding, URL context, agentic video understanding (defaults to static), batch API, implicit caching. No Live API, no image/audio generation.
- **Pricing (as of 2026-11-05):** Introductory $2 / $10 per 1M input/output tokens through 2026-11-30, then $4 / $20 from 2026-12-01; cached input $0.20/M; thinking tokens and grounding billed. Batch API supported.
- **Architecture:** Proprietary large-scale sparse mixture-of-experts (MoE) transformer, natively multimodal (text/vision/audio), trained on Google TPUs with JAX/ML Pathways, RL for multi-step reasoning; parameter count not disclosed.

### Raw benchmarks found

Vendor model-card table (deepmind.google, results as of October 2026, pass@1, highest thinking, Gemini API), cross-checked against DataCamp, emergent.sh, alphacorp, NeuralTrust, lmspedia, Artificial Analysis, laozhang:

Agent / tool use:

- AutomationBench (private set, Zapier leaderboard): **51.3%** (leads; GPT-6 Astra 41.4%, Opus 5.5 42.5%, Fable 5.1 31.4%) (Google model card)
- Agent's Last Exam (ALE-Claw, 5h, safety filters on): **39.5%** pass (Astra 34.2%, Opus 5.5 38.2%) (Google, self-computed)
- OSWorld 2.0 offline subset partial: **69.2%** (Astra 72.6% leads) (Google, self-computed)
- Vals Index: **68.9%** (Astra 63.1%, Fable 5.1 65.8%, Opus 5.5 67.0%) (Vals AI via Google)
- Vals Finance Agent v2: **65.4%** (Astra 53.5%) ; Harvey's Legal Agent Benchmark: **19.6%** (Astra 5.4%, Opus 5.5 3.8%) — absolute legal score low, relative lead large
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- LABBench 2: **88.8%** (Astra 85.4%, Opus 5.5 73.1%) (Google, self-computed)
- RiemannBench: **76.0%** (Astra 72.0%, Opus 5.5 69.6%) (Surge leaderboard)
- Terminal-Bench Science 0.1: **57.6%** (Astra leads 68.1%, Opus 5.5 63.3%) — Google self-computed, 6x verifier timeout
- Artificial Analysis Intelligence Index: **53 at high effort** on the launch article (2026-10-13; ties GPT-6 Astra max 53); conflicting later readings: NeuralTrust cites 52.6 vs Astra 52.7; on Index v5.0/v5.0.1 (late Oct) Argon reads 50–50.4 while Gemini 4 Carbon (not GA) leads at 59–59.4 — index is versioned and dropped after v5 reshuffle
- GPQA Diamond / HLE / MMLU Pro: no verified public score found for gemini-4-argon in the sources reviewed
- Omniscience / hallucination: AA launch article credits Argon with lower hallucinations than peers (no numeric value found)

Coding:

- DeepSWE v1.1: **77.9%** (leads; Astra 74.1%, Opus 5.5 74.2%, Fable 5.1 67.4%) (Google self-computed, mini-swe-agent harness)
- Vibe Code Bench: **91.9%** (leads; Astra 89.6%, Fable/Opus 5.5 90.3%) (Vals AI leaderboard)
- Terminal-Bench 4.0: **57.4%** (Astra 58.2%, Fable 5.1 57.9%, Opus 5.5 66.4% leads) (Google self-computed)
- FrontierSWE v2: **55.0%** (Astra leads 65.5%, Opus 5.5 62.3%) (Proximal leaderboard)
- FrontierCode 2.0: **25.7%** vs Gemini 4 Carbon 40.6% (laozhang.ai comparison) — clear weak spot vs newer sibling
- PostTrainBench v1.1: **45.3%** (Astra 44.3%; Opus 5.5 49.3% leads) (Google self-computed, H100 10h)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for this exact ID

Long context:

- GraphWalks BFS F1 up to 128k: **99.7%**; GraphWalks 256k–1M: **84.2%** (Astra 71.8%, Opus 5.5 66.8%) — measured retrieval inside the unified 1M window (Google self-computed)

Multimodal / cyber:

- LVBench: **91.7%** (Astra 87.5%, Opus 5.5 83.7%) (Google self-computed); Chartography: **71.6%** (Astra 71.0%, Opus 5.5 66.3%)
- CWE-bench v1: **68.0%** — tie with GPT-6 Astra (68.0%), above Opus 5.5 67.0% (official leaderboard); plus internal real-world vulnerability recall, Wiz PenTest, Gray Swan IPI benchmarks (internal, no public numbers)

### Normalized scores (1–100)

- **Tool use: 90/100.** Leads AutomationBench (51.3%), Vals Index (68.9%) and Agent's Last Exam (39.5%); capped by OSWorld 2.0 loss to Astra (69.2% vs 72.6%) and no Claw-Eval number.
- **Reasoning: 88/100.** LABBench 88.8% and RiemannBench 76% are frontier-leading, but Terminal-Bench Science trails Astra by ~10 points and the AA Intelligence Index reads only 50–53 depending on version (below the 60+ frontier band); no GPQA/HLE published.
- **Context window: 97/100.** Unified 1M window with measured GraphWalks retrieval (99.7% F1 ≤128k, 84.2% F1 at 256k–1M) puts it in the 95–100 tier; not 100 because the ≥512k retrieval figure is 84.2%, below the 98% bar, and the 1M window is shared with output/thinking.
- **Multimodal: 92/100.** Text/image/video/audio/PDF in with agentic video understanding, LVBench 91.7%; text-only output and no generation keep it below the top of the 90–100 band.
- **Coding: 88/100.** DeepSWE 77.9% and Vibe Code Bench 91.9% lead the published table, but FrontierSWE v2 (55.0% vs Astra 65.5%), TB 4.0 (57.4% vs Opus 5.5 66.4%) and a weak FrontierCode 2.0 (25.7%) cap it.
- **Cost efficiency: 78/100.** $2/$10 per 1M introductory (through 2026-11-30) sits between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; rises to $4/$20 (~55–60) from 2026-12-01, so the score is time-limited; no free tier.
- **Overall Score: 91/100.** Half-up mean of (90 + 88 + 97 + 92 + 88) / 5 = 91.0 → 91. Best fit: frontier pick for long-context knowledge work, legal/finance agents and cyber defense at promo pricing; trail Opus 5.5 on terminal coding and Astra on science/computer use; re-check after 2026-12-01 price change and when Gemini 4 Carbon reaches GA.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (7 web searches + official model card, evals-methodology page and Gemini API docs fetched, 2026-11-05 UTC); official Google DeepMind model card/evals prioritized, cross-checked against Artificial Analysis, DataCamp, Vals-sourced rows, NeuralTrust, emergent.sh, alphacorp, laozhang; conflicting figures (AA Index 53 vs 52.6 vs 50.4 across versions; win count 13 vs 14 of 19 rows due to the two GraphWalks rows) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Argon — Model Card, Google DeepMind (published 2026-10-13, full results table)](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [Gemini 4 Argon Model Card PDF](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Argon-Model-Card.pdf)
  - [Gemini 4 Argon — Model evaluation approach, methodology & results](https://deepmind.google/models/evals-methodology/gemini-4-argon)
  - [Gemini 4 Argon — Gemini API docs (model code, modalities, token limits, capabilities)](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon)
  - [Introducing Gemini 4 Argon — Google blog (pricing intro $2/$10 → $4/$20 after 2026-11-30)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)
  - [Gemini 4 Argon announcement — Google blog (2026-09-30, Fairwind Program)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [VentureBeat — Argon broadly available, $2/$10 limited-time pricing (2026-10-13)](https://venturebeat.com/technology/google-makes-gemini-4-argon-broadly-available-with-limited-time-low-api-pricing-of-2-10-per-1m-token)
  - [Artificial Analysis — Gemini 4 Argon top-three article (Index 53 at high)](https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs)
  - [Artificial Analysis — Gemini 4 Argon (high) model page](https://artificialanalysis.ai/models/gemini-4-argon)
  - [DataCamp — Gemini 4 Argon: benchmarks and access (13-of-19 analysis)](https://www.datacamp.com/blog/gemini-4-argon)
  - [emergent.sh — Gemini 4 Argon benchmarks (headline numbers incl. GraphWalks 84.2%)](https://emergent.sh/learn/gemini-4-argon-benchmarks)
  - [DataStudios — Gemini 4 Carbon vs Argon (AA Index v5: 59 vs 50)](https://www.datastudios.org/post/gemini-4-carbon-vs-gemini-4-argon-comparison)
  - [laozhang.ai — Carbon vs Argon (FrontierCode 2.0: 40.6% vs 25.7%)](https://blog.laozhang.ai/en/posts/gemini-4-carbon-vs-gemini-4-argon)
