# Ling 3.0 Flash Fin Free — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: InclusionAI / Ling 3.0 Flash Fin Free (OpenCode Zen Free)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** InclusionAI's finance-tuned Ling 3.0-flash variant, hosted as a free tier on OpenCode Zen. Niche pick for finance reasoning + tool-call execution. Vendor claims "strong" finance performance without full public harness.
- **Provider / access:** OpenCode Zen `opencode/ling-3.0-flash-fin-free`; Pi `pi.dev/models/opencode/ling-3.0-flash-fin-free`; Vercel AI Gateway 256K/32K finance MoE. Chat Completions endpoint.
- **Release / knowledge:** Ling 3.0-flash on HuggingFace late-2025; Fin variant 2026-Q3 per Vercel changelog (2026-08-27).
- **IDs:** `opencode/ling-3.0-flash-fin-free` (Zen Free). Vercel/Pi mirror same slug.
- **Context window:** 256K total (262,144/32,768 per Pi); Ling native 124B/5.1B MoE supports 1M but Free tier cap is 256K/32K.
- **Modalities:** Text in/out only. Tool calls supported; no image/audio/video/PDF.
- **Pricing (as of 2026-09-17):** $0/$0 on Zen Free.
- **Architecture:** 124B total / 5.1B active MoE; finance domain fine-tune; native context 256K→1M, Free tier 256K.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** for the Fin variant.
- Tau3-Banking: **no verified public score found** (vendor finance claims not publicly benchmarked).
- GDPval-AA: **no verified public score found**.
- Claw-Eval: **no verified public score found**.
- Toolathon / MCP-Atlas: **no verified public score found**.
- BenchLM Ling 3.0 Flash (base): **53.9 #110/228** overall.
- Independent Ling eval: 7.0/10, 845 records (frangelbarrera GitHub).

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for Fin variant.
- HLE: **no verified public score found**.
- LCR / MLCR: **no verified public score found** at 256K.
- CritPt: **no verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: **no verified public score found** for the Fin variant.
- Vibe Code Bench: **no verified public score found**.

Long context:

- RULER / MRCR at 256K: **no long-context retrieval reported**.

### Normalized scores (1–100)

> Scored provisionally from base Ling 3.0-flash benchmark (BenchLM 53.9) plus vendor finance claims; no Fin-specific same-harness numbers.

- **Tool use: 68/100.** Base Ling ~53.9 #110/228 overall + finance-tuning boost for Tau3-Banking style tasks; conservative placement in mid band.
- **Reasoning: 70/100.** Provisionally above the base model; finance domain tuning plausible for GPQA-adjacent problems. Cap = no public GPQA/HLE for Fin.
- **Context window: 72/100.** 256K tier (200K–500K band → 65–84). Pi caps at 262K; Vercel 256K. No measured retrieval → 72.
- **Multimodal: 15/100.** Text-only input. Baseline 15 per methodology.
- **Coding: 72/100.** Base Ling coding proxies (BenchLM aggregate); Fin variant primarily a finance specialist. Cap = no Fin-specific SWE/LiveCode/SciCode numbers.
- **Cost efficiency: 100/100.** $0/$0 Zen Free.
- **Overall Score: 59/100.** Mean (68+70+72+15+72+100)/6 = 66.2 → 66. Best fit: niche finance + efficient execution.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (BenchLM Ling 3.0 Flash, HuggingFace model card, Vercel/Pi model pages, frangelbarrera independent eval); Fin-specific numbers not publicly verified — scored provisionally.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.