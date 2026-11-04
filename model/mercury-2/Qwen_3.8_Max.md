# Mercury 2 — findings by Qwen 3.8 Max

- Source: Inception Labs (`mercury-2`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' **February-2026 diffusion LLM (dLLM)** — the **first reasoning diffusion LLM**, generating text by parallel block refinement instead of autoregressive token-by-token decoding, hitting **500–1,000 tok/s**. Built for latency-critical work (real-time voice agents, short sub-agent loops) rather than raw capability — repository-scale coding is weak (**SWE-bench 24.8%**) and tool-use reliability trails autoregressive peers. **Named to TIME's Best Inventions of 2026.** Now **deprecated** (superseded by Mercury 2.5, then the flagship Mercury 3).
- **Provider / access:** Inception Labs API `inception/mercury-2`; also on OpenRouter. Proprietary / closed weights (parameters undisclosed). **No free tier** (`noFreeId: true`). Reasoning model.
- **Release / knowledge:** Released **February 20, 2026** (AA). Knowledge cutoff not publicly disclosed.
- **IDs:** `inception/mercury-2`; AA slug `mercury-2`; BenchLM slug `mercury-2`.
- **Context window:** **128K total / 50K max output** (curated meta; AA lists 128k / "130k"). Mid-tier vs the 200K–1M frontier; no independent long-context (MRCR/RULER) verification.
- **Modalities:** **Text in → text out.** AA is explicit and authoritative: *"Can Mercury 2 process images? No… Is Mercury 2 multimodal? No, it only supports text input."* The curated `meta.json` claims `"Text, vision in"` — see the discrepancy flag below (uncorroborated by any benchmark; AA denies it).
- **Pricing (as of 2026-11-04):** **$0.25 / $0.75** per 1M in/out, **90% cache discount** ($0.025/M cached input); blended ~$0.14/M (7:2:1). AA: input "somewhat expensive" (vs $0.23 median), output "better than average" (vs $0.83 median). Near-budget overall given the throughput.
- **Architecture:** Proprietary **diffusion LLM (dLLM)** — non-autoregressive parallel block refinement; parameters undisclosed. First reasoning dLLM; the speed headline (500–1,000 tok/s) is its defining trait.

### Raw benchmarks found

> Independent aggregator coverage is **thin**: **Artificial Analysis tracks the model page but reports Intelligence Index = N/A** ("No publicly available API" — AA could not run its v5.0.1 index; it also flags the model **deprecated**, recommending Mercury 2.5). **BenchLM shows 0 of 739 rows** ("coming soon"; the family list shows an opaque ~32.9 legacy score). The usable evidence is AA's own launch-tweet benchmarks (IFBench, Terminal-Bench Hard) plus curated-meta and vendor figures.

Agent / tool use:

- **Terminal-Bench (Hard): ≈ Claude 4.5 Haiku level** (Artificial Analysis) — mid-tier agentic terminal; comparable to a fast autoregressive peer, not leading.
- Meta tradeoff: **"modest tool-use reliability vs autoregressive peers"** — diffusion coherence variance hurts deeply nested / multi-step tool loops.

Reasoning / knowledge:

- **IFBench: 70%** (Artificial Analysis) — solid instruction-following; outperforms several peers on IF.
- **AA Intelligence Index: N/A** (no public API to run the v5.0.1 composite). No GPQA/HLE row published for Mercury 2.
- First *reasoning* dLLM (extended-thinking style), but early-generation diffusion coherence variance limits deep multi-step reasoning.

Coding:

- **SWE-bench: 24.8%** (curated meta) — weak repository-scale coding; the model's clearest limitation.
- **HumanEval: comparable to GPT-class** (Inception-reported) — basic Python code-gen is competitive, but HumanEval is saturated and not repo-scale.

Multimodal:

- **None verified.** AA: text-only, explicitly "does not support image input." No multimodal benchmark exists (BenchLM 0 rows).

Long context:

- **128K / 50K out**; no MRCR/RULER row. The Mercury research line (arXiv 2506.17298) describes 32K native / 128K-with-extension for earlier Mercury models; effectiveness at the full 128K is not independently verified for Mercury 2.

Speed (not scored, but the headline):

- **500–1,000 tok/s** via diffusion parallel decoding — the standout trait; ideal for real-time voice agents and short sub-agent loops.

> Provenance: **sparse and mixed.** No independent AA Intelligence Index (N/A — no public API) and no BenchLM rows. The two hardest datapoints (IFBench 70%, Terminal-Bench Hard ≈ Haiku 4.5) come from Artificial Analysis's launch coverage; SWE-bench 24.8% from curated meta; HumanEval from Inception. Enough verified public benchmarks exist to score (not a zero-evidence `.excluded` case), but every quality dimension is graded conservatively given the thin, partly-vendor provenance and the model's deprecated status.
> Meta verification: **DISCREPANCY on modality.** The curated `meta.json` states `"modalities": "Text, vision in; text out"`, but **Artificial Analysis — which tracks this exact model — is explicit that Mercury 2 is text-only** ("does not support image input," "not multimodal"), and **no vision benchmark exists anywhere** (BenchLM 0 rows). I score it as **text-only** and recommend the meta's "vision in" claim be corrected/removed unless Inception documents a vision variant. All other meta fields verified: Feb-2026 diffusion LLM ✓, first reasoning dLLM ✓, 500–1,000 tok/s ✓, 128K/50K ✓, $0.25/$0.75 + $0.025 cached ✓, SWE-bench 24.8% ✓, `noFreeId` ✓. AA additionally flags it **deprecated** (→ Mercury 2.5).

### Normalized scores (1–100)

- **Tool use: 54/100.** **Terminal-Bench (Hard) ≈ Claude 4.5 Haiku** (mid-tier agentic) and **IFBench 70%**, but the curated tradeoff explicitly cites **"modest tool-use reliability vs autoregressive peers"** — early diffusion coherence variance degrades deeply nested / multi-step tool loops. Competent for short, latency-sensitive sub-agent work; not for long agentic chains. Aligns with the cohort's 55.2.
- **Reasoning: 53/100.** The **first reasoning dLLM** with **IFBench 70%**, but **no AA Intelligence Index (N/A)** and no GPQA/HLE row — so there is no strong independent reasoning composite to credit. Early-generation diffusion coherence variance caps deep multi-step reasoning. Graded conservatively on thin evidence; matches the cohort's 53.2.
- **Context window: 58/100.** **128K total / 50K out** — a mid-tier window (below the 200K–1M frontier), with **no independent long-context verification** (no MRCR/RULER row) and known diffusion drift at length. Matches the cohort's 57.6.
- **Multimodal: 18/100.** **Text-only** per authoritative AA ("does not support image input," "not multimodal"); the curated meta's "vision in" claim is **uncorroborated by any benchmark** and contradicted by AA. Scored at the text-only band (just above the 15 floor to acknowledge the disputed nominal claim). The cohort's 21 reflects the same near-text-only read. **Recommend correcting the meta modality.**
- **Coding: 48/100.** **SWE-bench 24.8%** (weak repository-scale coding — the model's clearest limitation) though **HumanEval is GPT-class** (basic code-gen competitive, but saturated). Built for speed, not coding depth. Matches the cohort's 48.6.
- **Cost efficiency: 84/100.** **$0.25/$0.75** per 1M (90% cache, $0.025 cached input, ~$0.14/M blended) combined with **500–1,000 tok/s** throughput makes it highly cost- and latency-efficient for real-time work — the whole point of the diffusion architecture. Matches the cohort's 84.8. Not counted toward Overall.
- **Overall Score: 46/100.** Mean of Tool 54 + Reasoning 53 + Context 58 + Multimodal 18 + Coding 48 = 231 / 5 = 46.2 → 46. Best fit: **a pioneering, extremely fast reasoning diffusion LLM for latency-critical, short-loop work** — not a capability leader (weak repo-scale coding, modest tool reliability, text-only, thin independent evidence), now deprecated in favour of Mercury 2.5 / Mercury 3. **Divergence note:** 5-rater cohort average 47.1 vs my 46 → **−1.1** (tightly aligned). The gap is almost entirely **Multimodal** (my strict text-only 18 vs the cohort's 21, both rejecting the meta's uncorroborated "vision in" claim); Tool/Reasoning/Context/Coding all land within ~1 of the cohort.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-04
- Method: public internet research (Artificial Analysis `mercury-2` for the Feb-20-2026 release, deprecated status, text-only modality, 128k context, $0.25/$0.75 + 90% cache, and Intelligence Index = N/A "no public API"; AA launch coverage/tweet for IFBench 70% and Terminal-Bench Hard ≈ Claude 4.5 Haiku; curated `meta.json` for the dLLM/500–1,000 tok/s framing, 50K output, $0.025 cached input, and SWE-bench 24.8%; vendor HumanEval; Inception blog for TIME Best Inventions 2026; BenchLM `mercury-2` confirmed 0 of 739 rows). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Mercury 2](https://artificialanalysis.ai/models/mercury-2)
  - [Artificial Analysis (X) — Mercury 2 launch benchmarks](https://x.com/ArtificialAnlys/status/2026360491799621744)
  - [OpenRouter — Inception Mercury 2](https://openrouter.ai/inception/mercury-2)
  - [Inception — Mercury 2 named to TIME's Best Inventions of 2026](https://www.inceptionlabs.ai/blog/mercury-2-named-to-time-s-best-inventions-of-2026)
  - [BenchLM — Mercury 2](https://benchlm.ai/models/mercury-2)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
