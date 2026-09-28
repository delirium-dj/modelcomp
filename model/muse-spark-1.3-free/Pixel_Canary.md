# Muse Spark 1.3 Contributor (free) — findings by Pixel Canary

- Source: Meta Superintelligence Labs / Muse Spark 1.3, **Contributor free tier** (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor — Meta Superintelligence Labs' proprietary multimodal reasoning model for long-running agentic, multi-agent and coding workflows, offered at $0 on OpenCode Zen in exchange for a training-data consent agreement.
- **Short description:** Same weights as standard Muse Spark 1.3 (LLMBoard 91.4 — the highest composite of any model in this dataset that is not a Claude/GPT flagship), reachable for free: it currently holds the best measured DeepSWE 1.1 and MRCR v2 scores in the whole comparison.
- **Provider / access:** Meta Model API and Muse Code (`muse-spark-1.3`); 11 tracked offerings incl. OpenCode Zen, DevPass (LLM Gateway) and Opper at $1.25 / $4.25, AIHubMix $1.38 / $4.68, NanoGPT as cheapest route at $1.25 / $4.25. The free tier exists only on OpenCode Zen under the Contributor consent scheme.
- **Release / knowledge:** released 2026-09-02; knowledge cutoff **not published** (LLMBoard lists Unknown) — no verified public figure, and Meta has not documented one on the pages consulted.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (free), `muse-spark-1.3` (paid, Meta/OpenCode Zen/DevPass/Opper), `muse-spark-1.3` on AIHubMix. Free tier: yes — Contributor consent tier on OpenCode Zen.
- **Context window:** 1,048,576 (1M) input / **943,712 (943.7K) max output** tokens (Meta runtime row) — by far the largest verified output budget in the dataset.
- **Modalities:** audio, image, text and video in; text out (LLMBoard specification). Local `meta.json` records "Text, image, video, PDF in" — consistent apart from the audio question, which LLMBoard asserts and no benchmark corroborates. Tool use, instruction-following and failure recovery are the headline design goals; no generation output.
- **Pricing (as of 2026-09-27):** **Free** Zen Contributor tier ($0, training-data consent required); Contributor paid tier $0.10 / $0.20 per 1M; Standard $1.25 / $4.25 per 1M (Meta official, matched by NanoGPT/OpenCode Zen/DevPass/Opper); cache-read and batch rates not published (no verified public figure).
- **Architecture:** proprietary, parameters undisclosed, open weights no. Note: LLMBoard has **no separate profile for the free variant** (`/models/muse-spark-1-3-free` returns "Model not found"), so all capability evidence below is from the shared `muse-spark-1-3` profile — appropriate, since the free tier ships identical weights.

### Raw benchmarks found

> LLMBoard profile for Muse Spark 1.3 (evaluations 2026-09-13 → 2026-09-27): 30 of 34 rows published, coverage **80% / 10 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **91.4**.

Agent / tool use:

- DeepSWE 1.1: **75.40%** (#1/38) — the highest end-to-end software-engineering agent score in this dataset, above GPT-5.6 Sol's 72.70%
- Terminal-Bench 2.1: **88.80%** (#5/42); Job Bench **64.90%** (#1/8); AutomationBench **49.40%** (#3/21)
- OSWorld 2.0 (computer use): **66.90%** (#5/14)
- GDPval-AA: **1754.00 points** (#4/12); SWE Atlas – Codebase QnA **59.40%** (#1/3); Agentic IF Index (internal) **57.80%** (#1/1)
- tau-bench family, MCP Atlas, Toolathon, Claw-Eval: no verified public score found

Reasoning / knowledge:

- LiveBench math (2026-06-25): **95.95** score (#3/41); LiveBench instruction **78.00** (#4/41)
- AA SciCode Subtasks: **59.72%** (#4/89); DeepSearchQA **89.40%** (#6/11)
- GPQA / HLE / Omniscience for this ID: not present in the extracted rows — no verified public score found

Coding:

- DeepSWE 1.1 **75.40%** (#1/38), Terminal-Bench 2.1 **88.80%** (#5/42), SWE Atlas Codebase QnA **59.40%** (#1/3), LM Arena Webdev **1655.50** (#6/100)
- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench: no verified public score found

Long context:

- MRCR v2 (8-needle): **98.50%** (#1/25); MRCR v2 (8-needle, 512K–1M band): **98.10%** (#1/4) — the strongest *measured* long-context retrieval evidence anywhere in this comparison.

Other modality evidence: LM Arena Vision Style Control **1294.06** (#5/111).

Runtime: **5.06 tok/s** with **10.05 s** catalog latency on the Meta Model API — the second-slowest endpoint measured (only Kimi K3's 3.44 tok/s is worse), which is the main practical cost of the free tier.

### Normalized scores (1-100)

- **Tool use: 94/100.** DeepSWE 1.1 75.40% (#1/38 - the largest and deepest agent field in this dataset) plus Terminal-Bench 2.1 88.80% (#5/42), Job Bench 64.90% (#1/8) and GDPval-AA 1754.00 (#4/12) is a near-frontier agentic profile; OSWorld 2.0 66.90% (#5/14) is the one soft spot, and no tau/MCP-class number exists.
- **Reasoning: 86/100.** LiveBench math 95.95 (#3/41) and instruction 78.00 (#4/41) are strong on a contamination-resistant, dated set; capped because GPQA, HLE and Omniscience rows are absent and no knowledge cutoff is published, so hallucination risk cannot be quantified.
- **Context window: 97/100.** 1M input with a **943.7K output** ceiling, verified by MRCR v2 98.50% (#1/25) and 98.10% inside the 512K-1M band (#1/4) - the only model here with both the biggest budget and the measured retrieval to back it.
- **Multimodal: 86/100.** Audio, image, text and video input with LM Arena Vision Style Control 1294.06 (#5/111) as corroboration; capped by text-only output and by the absence of any video/audio-specific benchmark for this ID.
- **Coding: 93/100.** DeepSWE 1.1 75.40% (#1/38) with Terminal-Bench 2.1 88.80% and LM Arena Webdev 1655.50 (#6/100) covers repo, terminal and front-end work; docked because no SWE-bench Verified/Pro or LiveCodeBench number exists to compare against Claude Opus 5.5's 89.90%.
- **Cost efficiency: 96/100.** A genuine $0 tier (Contributor consent) with a $0.10 / $0.20 middle tier and $1.25 / $4.25 standard pricing; docked for the 5.06 tok/s throughput and the privacy cost of the consent tier rather than for money.
- **Overall Score: 91.2/100.** Half-up mean of (94 + 86 + 97 + 86 + 93) = 456 / 5 = 91.2, Cost excluded. Cross-check: the independent LLMBoard composite is 91.4 - agreement within 0.2 points. Best fit: long-horizon software-engineering and document/video agents that need huge output budgets; budget-constrained teams can run it free, but must tolerate very slow token delivery.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard profile `muse-spark-1-3` incl. provider pricing and runtime tables + local `meta.json` for the free/Contributor tier structure; the tracker has no separate profile for the free variant); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
