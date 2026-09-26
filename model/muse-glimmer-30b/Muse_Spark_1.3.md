# Muse Glimmer 30B — findings by Muse Spark 1.3

- Source: Meta/Muse Glimmer 30B (`meta/muse-glimmer-30b`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Aug 2026 open-weights (Apache 2.0) 30B dense release distilled from Muse Spark: a tool-calling specialist that runs in <20GB at 4-bit on a single consumer GPU, leading its size class on MCP Atlas (75.5). Top use case: always-on local agent workflows with no hosted-inference round trip.
- **Provider / access:** Meta (Hugging Face `meta-models/Muse-Glimmer-30B`, GGUF + DFlash speculative drafter; OpenRouter `meta/muse-glimmer-30b`; Fireworks/Together/Vercel; NVIDIA NIM); OpenCode Zen ID `meta/muse-glimmer-30b`.
- **Release / knowledge:** 2026-08-10 release (Meta launch post via research.meta.ai; AI Weekly/Codersera coverage); knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-glimmer-30b` (no Zen Free ID — paid hosted or self-hosted open weights).
- **Context window:** 131,072 total (folder meta.json; Opper lists 131K in / 33K out). No public retrieval-at-length numbers found.
- **Modalities:** Text + image in (1.8B ViT-G/14 perception encoder, separate mmproj); text out; reasoning yes; tool calls + structured outputs yes; PDF input per Opper feature list.
- **Pricing (as of 2026-09):** Hosted: OpenRouter $0.30 input / $1.10 output per 1M (folder meta.json); Fireworks/Together/Vercel $0.35/$1.50; EmpirioLabs $0.20/$0.80 (Opper). Self-host free under Apache 2.0 (noted as upside, not scored).
- **Architecture:** ~30B dense causal LM (29.6B per AI Weekly) with dedicated perception encoder, distilled from Muse Spark; Apache-2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **75.5** (Meta model card via AI Weekly + Codersera; vs Gemma4-31B 54.2, Qwen3.6-27B 62.5 — size-class lead)
- OSWorld-Verified: **65.9%** (Meta table via Codersera; BenchLM corroborates 65.9%)
- Terminal-Bench 2.1 (provider run): **51.7%** (Meta table via Codersera/BenchLM ledger; vs Qwen3.6-27B 60.7%)
- WildClawBench: **47.6** (Meta table via Codersera)
- SkillsBench (with skills): **44.3** (Meta table via Codersera)
- DeepSearchQA: **74.6%** (BenchLM Kimi-K2.6 compare page)
- Tau3-Bench: **no verified public score found** (named on the HF model card with no published number)
- Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found** (WildClawBench above is a different harness)
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (Meta model card via AI Weekly)
- AIME 2026: **94.7%** (Meta model card via AI Weekly/BenchLM)
- IFBench (instruction following): **77.0%** (BenchLM compare pages; beats Opus 4.5's 58%)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (TensorFeed vendor composite 76.0/100 is an aggregator score, not AA proper)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **76.0%** (Meta table; BenchLM corroborates 76%)
- SWE-bench Pro: **51.2%** (Meta table; BenchLM ledger corroborates)
- SciCode: **43.6%** (BenchLM ledger, from Meta launch post)
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (131K window verified via meta.json/Opper; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 76/100.** MCP Atlas 75.5 (size-class lead) plus OSWorld-Verified 65.9% evidence genuine tool orchestration at 30B; TB 2.1 51.7% trails Qwen3.6-27B and no Tau/GDPval numbers exist, so capped at 76.
- **Reasoning: 80/100.** AIME 2026 94.7 and GPQA-D 83.5 plus IFBench 77.0 is a strong compact-model reasoning set; capped with no HLE/LCR/CritPt/Index numbers.
- **Context window: 55/100.** Verified 131K sits low in the 100K–200K tier (50–64); single-GPU local serving is a deployment virtue, not extra window.
- **Multimodal: 65/100.** Text + image in (CharXiv 78.8% corroborates vision competence), text-only out — mid-band of the image-in tier.
- **Coding: 80/100.** SWE-Verified 76.0% + SWE-Pro 51.2% at 30B open weights is excellent size-class coding; SciCode 43.6% and missing LiveCode/DeepSWE numbers cap it at 80.
- **Cost efficiency: 94/100.** Hosted $0.30/$1.10 sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (≈92) references; Apache-2.0 self-hosting noted as further upside.
- **Overall Score: 71/100.** Mean of the five non-cost dims (76 + 80 + 55 + 65 + 80) / 5 = 71.2 → 71; best fit as the local tool-calling specialist for always-on agents on consumer hardware.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Meta launch post via research.meta.ai, Hugging Face model card, AI Weekly/Codersera coverage, BenchLM model + compare pages, Opper pricing record, TensorFeed composite); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
