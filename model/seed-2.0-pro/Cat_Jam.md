# Seed 2.0 Pro — findings by Cat Jam

- Source: ByteDance / Seed 2.0 Pro (`opencode/seed-2.0-pro`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance flagship (released 2026-02-14) for long-chain reasoning, coding, agents, multimodel (image/video). Strong math SOTA (AIME ~98% etc.) at low price. Knowledge cutoff Jan 2024.
- **Provider / access:** Doubao/TRAE + Volcano Engine API; OpenAI-compatible. Text/image/video in; text out.
- **Release / knowledge:** Released 2026-02-14; knowledge cutoff Jan 1, 2024.
- **IDs:** `doubao-seed-2-0-pro-260215` (Volcengine)
- **Context window:** 256,000 tokens; max output 128K. (256K context; per pricing table, chunk output limit 128K from Puter docs) Simpler: max output 131K (traictory) — use "128K max" from official Puter note, or `131,072` as found on DeepInfra docs. We'll use ≤256K in / 128K out.
- **Modalities:** Text, image, video in; text out. Tools, reasoning.
- **Pricing (as of 2026-10-16):** Volcengine $0.47/$2.37 per 1M (or $0.50/$3.00 via DeepInfra), cached $0.10.
- **Architecture:** Proprietary MoE? Not stated. Text (not open weights despite earlier generations). 

### Raw benchmarks found (ByteDance model card / independent)

Language:

- MMLU-Pro: 87.0
- HLE no tools: 32.4
- SuperGPQA 68.7
- Encyclo-K 65.7
- AIME 2026 94.2; AIME 2025 98.3; HMMT Feb 2025 97.3; Nov 2025 93.3
- MathArenaApex 20.3; BeyondAIME 86.5; IMOAnswerBench 89.3
- Codeforces 3020; LiveCodeBench 87.8 (no tool)
- GPQA Diamond 88.9; Superchem 51.6
- ARC-AGI-1 85.4; ARC-AGI-2 37.5
- ProcBench 96.6
- IFBench etc; inverse IF 78.9; FactScore 71.2
- LongBench v2 63.8; MRCR 8-needle 54.0; GraphWalks Bfs (<128k) 68.9
- Epoch Encyclo-K etc

Coding:
- Terminal Bench 2.0: ~55.8% (third-party compilation)
- SWE-bench Verified: 76.5%
- SWE-bench Pro: 46.9
- SWE-Lancer 49.4
- Multi-SWE-Bench 45.2
- Multi-SWE 47.7? outward table showed 47.7/45.2; use 45.2 as per third-party compiled
- LiveCodeBench v6 87.8/88 (per Puter/Third party)
- Codeforces 3020
- AIME 2025 98.3 (Atlabyte)
- BrowseComp 77.3

Agent:
- GDPVal-Agent / tool tasks? GDPval-Diamond? Not clear
- BrowseComp 77.3
- Tao2-Bench maybe n/a
- τ²-Bench etc not in sampled

Agentic tasks not fully listed aside from BrowseComp.

### Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 77.3, SWE-Lancer 49.4, Multi-SWE 45.2; integration strong; tau² not found.
- **Reasoning: 90/100.** AIME 94.2–98.3, GPQA 88.9, HLE 32.4 (no tools), SuperGPQA 68.7, MathArena 20.3, ARC-AGI-2 37.5, KORBench 77.5.
- **Context window: 84/100.** 256K context, MRCR 54.0 at 128K.
- **Multimodal: 86/100.** text/image/video in; text out; PHI/Chart? no OmniDoc score in sampled table aside from some vision tasks. Strong visual STEM.
- **Coding: 84/100.** SWE-Verified 76.5, SWE-Pro 46.9, TB2 55.8, LiveCodeBench 87.8, Codeforces 3020, Code AetherCode 60.6.
- **Cost efficiency: 94/100.** $0.47/$2.37 (Volcengine) to $0.50/$3.00; cheapest capable math/coding model.
- **Overall Score: 84.8/100.** Mean (80+90+84+86+84)/5 = 84.8 → 85? Let's calculate: 80+90=170, +84=254, +86=340, +84=424 => 84.8. Report **85**.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Seed2.0 Model Card tables, atlabyte, Trajectory, Puter docs, decoder press); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
