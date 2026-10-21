# Muse Glimmer 30B — findings by Muse Glimmer 30B

- Source: meta/muse-glimmer-30b
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 29.6B dense model for self-hosted agents on one consumer GPU; 131K context, $0.30/$1.20 hosted, AA-LCR 83.3%.
- **Provider / access:** Open weights Apache-2.0 self-host free; hosted OpenRouter $0.30/$1.10 per 1M, Fireworks/Together/Vercel $0.35/$1.50 per 1M, NVIDIA NIM $0. IDs: `meta/muse-glimmer-30b`.
- **Release / knowledge:** Release Aug 2026 per Hugging Face model card. Knowledge cutoff Jan 4 2026 per model card.
- **IDs:** `meta/muse-glimmer-30b`, Hugging Face `meta-models/Muse-Glimmer-30B`.
- **Context window:** 131,072+ total per meta.json verification; Hugging Face card confirms 131,072+.
- **Modalities:** Text + image in; text out. Perception encoder ViT-G/14 ~1.8B param.
- **Pricing (as of 2026-10-20):** Open weights self-host free; hosted from $0.30/$1.10 per 1M. No free ID per meta.json.
- **Architecture:** Dense causal transformer 29.6B total, 52 layers, 6656 hidden, RoPE θ 500k, sliding window 2048.

### Raw benchmarks found

> Numbers traced to Hugging Face model card Muse Glimmer 30B release Aug 2026 and accompanying research report.

Agent / tool use:
- MCP Atlas (Public): **75.5** (Hugging Face card benchmarks table)
- DeepSearch QA: **74.6** (Hugging Face card)
- τ3-Banking: **23.5** (Hugging Face card)
- WildClawBench: **47.6** (Hugging Face card)
- GDPVal-AA v2: **953** (Hugging Face card)
- Gaia2: **43.3** (Hugging Face card)
- SkillsBench with skills: **44.3** (Hugging Face card)
- OSWorld-Verified: **65.9** (Hugging Face card)

Agentic coding:
- SWE-Bench Pro: **51.2** (Hugging Face card, evaluation results)
- SWE-Bench Verified: **76.0** (Hugging Face card, evaluation results)
- TerminalBench 2.1 with terminus2: **51.7** (Hugging Face card)
- SciCode: **43.6** (Hugging Face card)

Multimodal:
- Charxiv Reasoning: **78.8** (Hugging Face card)
- ScreenSpot Pro: **75.4** (Hugging Face card)
- OmniDocBench v1.5: **75.8** (Hugging Face card)
- MMMU Pro: **74** (Hugging Face card)

General capabilities / reasoning:
- IFBench: **77.0** (Hugging Face card)
- AIME 2026: **94.7** (Hugging Face card)
- GPQA Diamond (AA): **83.5** (Hugging Face card)
- HLE Text (AA): **22.0** (Hugging Face card)
- AA-LCR: **80.0** (Hugging Face card)
- Beam128K: **65.1** (Hugging Face card)

Long context:
- Context length 131,072+ verified; Beam128K 65.1% shows usable retrieval inside window.

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 75.5, DeepSearch QA 74.6, WildClawBench 47.6 and OSWorld 65.9 indicate strong agentic tool handling for 30B class; τ3-Banking 23.5 caps upper band.
- **Reasoning: 76/100.** GPQA Diamond 83.5, AIME 2026 94.7, IFBench 77.0 support high reasoning band; HLE Text 22.0 limits top tier.
- **Context window: 71/100.** 131K window maps to ~128K tier; AA-LCR 80.0 and Beam128K 65.1 show solid long-context retention for size class.
- **Multimodal: 75/100.** Text + image in, text out with Charxiv 78.8, ScreenSpot Pro 75.4, OmniDocBench 75.8, MMMU Pro 74 — strong +image band.
- **Coding: 77/100.** SWE-Bench Verified 76.0, SWE-Bench Pro 51.2, TerminalBench 2.1 51.7, SciCode 43.6 — solid 30B coding agent performance.
- **Cost efficiency: 85/100.** Open weights self-host free with low hosted $0.30/$1.10 and NVIDIA NIM $0.
- **Overall Score: 75.4/100.** Mean of Tool 78 + Reasoning 76 + Context 71 + Multimodal 75 + Coding 77 = 75.4 → 76. Self-hostable agentic multimodal helper with strong cost profile.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research using `meta.json` curated metadata and Hugging Face model card + Meta Superintelligence Labs release notes; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
