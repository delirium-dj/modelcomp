# Claude Opus 4.8 — findings by Pixel Canary

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4.8`, also `claude-opus-4-8-think`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 — Anthropic's late-May 2026 flagship, described at launch as its most capable general-access model, with high / extra (xhigh) / max effort levels for different task demands.
- **Short description:** The deepest-evidenced coding model in this dataset: SWE-bench Verified **88.60%** across 116 competitors plus SWE-Bench Pro, Multilingual and Multimodal rows, all backed by 80% coverage over 27 benchmark families.
- **Data-quality note:** the local `meta.json` says "200K" context. Public data says **1M** on Anthropic/Vertex/Azure (only some routers such as AIHubMix still cap at 200K), and it also omits the `claude-opus-4-8-think` variant ID. `meta.json` should be refreshed.
- **Provider / access:** Anthropic API; **46 tracked offerings** incl. Azure, Vertex AI and AIHubMix (`claude-opus-4-8`, `claude-opus-4-8-think`) at $5 / $25; cheapest route $0.425 / $2.13 (UnoRouter).
- **Release / knowledge:** released 2026-05-28; knowledge cutoff **not published** (LLMBoard lists Unknown) — no verified public figure.
- **IDs:** `anthropic/claude-opus-4.8`, `claude-opus-4-8`, `claude-opus-4-8-think`. No Free ID — paid only.
- **Context window:** 1M input / 128K max output on the measured Anthropic runtime row (the specification block's "1M max output" is not corroborated by any runtime row and is treated as a tracker artefact; 128K is used).
- **Modalities:** image + text in; text out. Tool use, computer use (OSWorld-Verified, ScreenSpot Pro) and adjustable effort levels yes; no audio/video input, no generation.
- **Pricing (as of 2026-09-27):** official Anthropic **$5 / 1M input, $25 / 1M output**; Azure/Vertex/AIHubMix pass through $5 / $25; **lowest tracked route $0.425 / $2.13 (UnoRouter)**. Cache-read and batch rates not tracked for this ID (no verified public figure). Paid only.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-13 → 2026-09-27): 30 of 51 rows published, coverage **80% / 27 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **83.9**.

Coding (the strongest coding evidence base in this comparison):

- SWE-Bench Verified: **88.60%** (#3/116)
- SWE-Bench Pro: **69.20%** (#4/59); SWE-bench Multilingual: **84.40%** (#3/46)
- FrontierSWE: **75.00%** (#4/16); SWE-Bench Multimodal: **38.40%** (#4/5)

Agent / tool use:

- OSWorld-Verified (computer use): **83.40%** (#4/26); ScreenSpot Pro: **87.90%** (#2/26)
- DeepSearchQA: **93.10%** (#3/11); OfficeQA Pro: **66.20%** (#4/10); Finance Agent v2: **53.92%** (#5/27)
- LM Arena Agent Leaderboard: **7.31%** (#5/39); Agent Steerability **10.06%** (#3/39)
- GDPval-AA, Terminal-Bench, DeepSWE, MCP Atlas: not present in the extracted rows — no verified public score found

Reasoning / knowledge:

- GPQA: **93.60%** (#6/250) — a 250-model field, the largest comparison pool on the tracker
- Include (knowledge): **87.60%** (#1/31); LiveBench: **77.22%** (#6/38)
- GraphWalks parents >128k: **83.30%** (#2/7); GraphWalks BFS >128k: **68.10%** (#5/11)
- HLE / Omniscience / SimpleQA rows for this ID: not present in the extracted rows — no verified public score found

Long context:

- 1M input verified with two measured GraphWalks navigation rows above; no MRCR/RULER retrieval row in the extracted rows.

Runtime: **142.11 tok/s** with **3.41 s** catalog latency on Anthropic; Vertex AI serves the same weights at **42.00 tok/s** with **0.50 s** latency — a 3.4× provider-dependent throughput spread.

### Normalized scores (1-100)

- **Tool use: 88/100.** OSWorld-Verified 83.40% (#4/26) with ScreenSpot Pro 87.90% (#2/26) and DeepSearchQA 93.10% (#3/11) is a proven computer-use and research agent; docked because LM Arena Agent Leaderboard 7.31% (#5/39) and Finance Agent v2 53.92% (#5/27) are only mid-pack and no GDPval/Terminal/DeepSWE row exists.
- **Reasoning: 88/100.** GPQA 93.60% across **250 competitors** (#6) is the most statistically solid reasoning datapoint in this dataset, with Include 87.60% (#1/31) and LiveBench 77.22% (#6/38) as breadth; capped by unpublished HLE/Omniscience rows and an undisclosed knowledge cutoff.
- **Context window: 90/100.** 1M input / 128K output **with two measured long-range navigation rows** (GraphWalks parents 83.30% #2/7, BFS 68.10% #5/11) - verified rather than advertised; docked for the uneven router landscape, where some gateways still cap at 200K.
- **Multimodal: 76/100.** Text + image in only, though SWE-Bench Multimodal 38.40% (#4/5) proves it acts on visual context; no audio, video or PDF-native input in the verified matrix and no generation.
- **Coding: 96/100.** SWE-Bench Verified 88.60% (#3/116), SWE-Bench Pro 69.20% (#4/59), Multilingual 84.40% (#3/46) and FrontierSWE 75.00% (#4/16) is four independent, deep-field coding results - the strongest and best-evidenced coding profile in this comparison.
- **Cost efficiency: 68/100.** $5 / $25 official with no free tier and no published cache disclosure; mitigated by 46 providers, a $0.425 / $2.13 router floor and 142.11 tok/s on the first-party endpoint.
- **Overall Score: 87.6/100.** Half-up mean of (88 + 88 + 90 + 76 + 96) = 438 / 5 = 87.6, Cost excluded. Cross-check: the independent LLMBoard composite is 83.9 - agreement within 4 points, the spread coming from the tracker's weighting of the mid-pack LM Arena Agent row. Best fit: production software engineering and computer-use automation where verified SWE evidence matters more than price or modality breadth.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables; 30 of 51 rows are published and only retrievable rows are cited) + local `meta.json` for free-tier notes; no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
