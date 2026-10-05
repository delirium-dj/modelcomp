# Gemma 4 12B Unified — findings by Big Pickle

- Source: Google DeepMind (`google/gemma-4-12B`). Requested ID `opencode/gemma-4.12b-unified` is **not on OpenCode Zen** — no matching Zen ID exists
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's mid-size Gemma 4 open-weight model, added to the family on 2026-06-03 (five months after the April 2 launch of E2B / E4B / 26B A4B / 31B). It is the family's **encoder-free** variant: instead of running a separate vision or audio encoder, it projects raw image patches and audio waveforms straight into the LLM embedding space through lightweight linear layers, so text, image and audio all flow into one decoder-only transformer. Google positions it as near-26B-MoE quality at under half the memory footprint. Top use case: cheap single-GPU or local multimodal (text + image + **audio**) agentic work at a 256K context window.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-12B-it`, Apache 2.0, `pipeline_tag: any-to-any`), loadable with `AutoModelForMultimodalLM` in the latest Transformers. Hosted on SiliconFlow (`google/gemma-4-12B-it`), nano-gpt (`gemma-4-12b-it`), Pioneer and OpenRouter-adjacent gateways; all hosted routes are OpenAI-compatible Chat Completions. **Not** on OpenCode Zen — the Zen catalog carries no Gemma route.
- **Release / knowledge:** Released **2026-06-03** (Google Gemma releases page). Pre-training data cutoff **January 2025** (official model card).
- **IDs:** `google/gemma-4-12B-it` / `google/gemma-4-12B` (Hugging Face), `google/gemma-4-12b-it` (SiliconFlow, Pioneer), `gemma-4-12b-it` (nano-gpt). **No Free ID exists on Zen** — `noFreeId` applies; cost is scored on verified paid pricing.
- **Context window:** **256K tokens natively** (official card, listed as 262,144 by SiliconFlow and apxml.com). Provider caps diverge: nano-gpt serves it at **131,072** with 32,768 max output, and Pioneer at only 32,768. Max output is not published by Google; the 256K figure is the model limit, not a guarantee from every host.
- **Modalities:** **Text, image and audio in; text out.** Video is supported as a frame sequence (max 60s at 1 fps); audio is native (max 30s) with automatic speech recognition and speech-to-translated-text. Reasoning: yes, via a `<|think|>` control token (thinking disabled → empty thought block). Native `system` role support and native function calling. Variable image resolution via configurable visual token budgets (70 / 140 / 280 / 560 / 1120). No non-text output route found.
- **Pricing (as of 2026-10-05):** **$0.10 in / $0.30 out** per 1M (Artificial Analysis median across providers; also SiliconFlow's list price), blended **$0.15/1M**. Cheapest tracked route is nano-gpt at **$0.05 / $0.25** per 1M. Pioneer lists $0.25/$0.25 at a reduced 32K window. Self-hosting is **$0** under Apache 2.0. Paid only — no $0 hosted tier, so no training-data or privacy caveat applies.
- **Architecture:** Open-weight **dense** decoder, **11.95B parameters**, 48 layers, 1024-token sliding window, 262K vocabulary, **no vision encoder and no audio encoder** (encoder-free by design; raw patches and waveforms enter via linear projections). Hybrid attention interleaves local sliding-window and full global attention, with unified Keys and Values and Proportional RoPE (p-RoPE) on global layers. Multilingual: 140+ pre-training languages, 35+ out-of-the-box. Recommended sampling: `temperature=1.0`, `top_p=0.95`, `top_k=64`.

### Raw benchmarks found

Two independent harnesses disagree materially, so both are listed with attribution. Google's own card reports instruction-tuned results; the third-party figures come from the Artificial Analysis "Reasoning" route and the BenchLM mirror of it.

Agent / tool use:

- Tau2 (average over 3 domains): **69.0%** (Google model card). Highest single agentic datapoint for this checkpoint, and marginally above the 26B A4B's 68.2% in the same table — the anomaly to watch in this family.
- τ²-Bench Telecom: **36.3%** (Artificial Analysis via Franklin AI and aiflashreport; Opper reports the same figure as 36%). Same benchmark family as Google's Tau2 row, single domain, and **less than half** Google's average — the largest harness divergence in this report.
- TerminalBench Hard: **18.2%** (Artificial Analysis, ranked **#165** on CloudPrice's leaderboard)
- GDPval-AA / OSWorld / AutomationBench / Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (Google card) / **75.3%** (Artificial Analysis) — harness spread of ~3.5 pts
- HLE no tools: **5.2%** (Google card) / **15.7%** (Artificial Analysis) — harness spread of ~10 pts, and the widest absolute gap on the card
- MMLU-Pro: **77.2%** (Google card)
- MMMLU: **83.4%** (Google card)
- AIME 2026 no tools: **77.5%** (Google card)
- BigBench Extra Hard: **53.0%** (Google card)
- IFBench: **73.5%** (Artificial Analysis, ranked **#38** of 124 — a genuine strength)
- Artificial Analysis Intelligence Index: **14** (Artificial Analysis; 14.2 on CloudPrice #232 and Opper). BenchLM overall **28.4** across 12 benchmarks (Coding lane 22 #116/142, Reasoning 34.9, Knowledge 31.1 #134/168, Multimodal 27.2 #46/50, Mathematics 53, Instruction Following **88.7 #22/124**).
- CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **72.0%** (Google card) / **55.3%** (Artificial Analysis, "LiveCodeBench Reasoning")
- Codeforces ELO: **1659** (Google card)
- SciCode: **38.2%** (Artificial Analysis, ranked **#205** on CloudPrice)
- Coding Index: **31.0** (Artificial Analysis, ranked **#117** of 122)
- SWE-bench Verified / SWE-Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- **AA-LCR: 63.7%** (Artificial Analysis; Opper lists the same run as "long-context reasoning 64%")
- **MRCR v2 8-needle @ 128K (average): 43.4%** (Google card). Family context for the same test: 31B Dense 66.4%, 26B A4B 44.1%, E4B 25.4%, E2B 19.1%, Gemma 3 27B 13.5% — so 12B Unified lands mid-family on retrieval despite a 256K window.
- Throughput: **140.7–148 tok/s** output, TTFT 1.31–2.46s (Artificial Analysis route, two snapshots)

Multimodal (for the scoring dimension):

- MMMU-Pro: **69.1%** (Google card; BenchLM #46/50). Family: 31B 76.9%, 26B A4B 73.8%, Gemma 3 27B 49.7%.
- MATH-Vision: **79.7%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.164**. Family: 31B 0.131, 26B A4B 0.149, E4B 0.181, E2B 0.290.
- MedXPertQA (MM): **48.7%**
- CoVoST (ASR, excluding Chinese): **38.5**
- FLEURS (lower is better, excluding Chinese): **0.069**

### Normalized scores (1–100)

- **Tool use: 58/100.** Google's Tau2 average of 69.0% would sit near the top of the 50–70 mid band on its own, and native function calling plus `system`-role support make it genuinely agent-shaped. But the independent Artificial Analysis run contradicts it hard: **TerminalBench Hard 18.2%** is *below* the methodology's 45–60% mid band on the primary anchor, and τ²-Bench Telecom comes in at 36.3% against Google's 69.0% — a less-than-half gap between harnesses on the same benchmark family. With no GDPval-AA and no Claw-Eval to adjudicate, the vendor number is not corroborated and the anchor that is measured independently is weak.
- **Reasoning: 58/100.** GPQA Diamond 75.3–78.8% and MMMLU 83.4% are solid, AIME 2026 at 77.5% is real math reasoning, and IFBench 73.5% at **#38 of 124** is a standout instruction-following result. Capped in the middle of the 55–65 band because the AA **Intelligence Index of 14 falls below the 20–35 mid band**, HLE is 5.2% (Google) to 15.7% (AA) against a 40% frontier marker, and MRCR 43.4% is weak. Knowledge and instruction-following are strong; frontier reasoning is not.
- **Context window: 72/100.** Native 256K places it in the 200K–500K tier, just above the 200K = 70 anchor, and unlike most 256K models it has genuine measured retrieval behind it — **AA-LCR 63.7%** clears the methodology's "<40% = weak" marker comfortably. Held well below the higher bands because MRCR v2 8-needle at 128K is only 43.4% (mid-family, and the 31B manages 66.4%), there is no ≥512K measurement, and real hosts cap it at 131,072 (nano-gpt) or even 32,768 (Pioneer), so the 256K window is not reliably reachable in practice.
- **Multimodal: 90/100.** Text + image + **native audio** in with text out places it in the 90–100 band, and the audio route is real and specified: CoVoST 38.5 ASR plus FLEURS 0.069 for speech-to-translated-text, alongside video at 60s/1fps and configurable visual token budgets. Set at the bottom of the band because the perceptual quality is mid-family rather than frontier — MMMU-Pro 69.1% trails the 31B's 76.9%, MedXPertQA MM is 48.7%, and CoVoST 38.5 is not a strong ASR score — and there is no non-text output.
- **Coding: 62/100.** Below the 65–75 mid band. LiveCodeBench v6 is **72.0%** on Google's card but **55.3%** under Artificial Analysis, SciCode is **38.2%** (under the methodology's 40% mid-band marker, #205), and the Coding Index is **31.0 at #117 of 122**. Codeforces ELO 1659 and the genuine family jump (Gemma 3 27B 29.1% → 72.0% LiveCodeBench v6) keep it out of the bottom tier, and Google explicitly calls out enhanced coding and agentic capability — but with no SWE-bench Verified, DeepSWE or Vibe Code Bench figure at all, there is no repo-level patch evidence to lift it.
- **Cost efficiency: 97/100.** $0.10/$0.30 with a **$0.15/1M blended** median sits right in the ~$0.10/$0.20 = 97–99 band, nano-gpt undercuts it at $0.05/$0.25, and Apache 2.0 open weights make self-hosting $0 for a 12B model that fits in ~29 GB at FP16. Not 100: there is no $0 *hosted* tier, so this is cheap-but-paid, not free.
- **Overall Score: 68/100.** Half-up mean of 58 / 58 / 72 / 90 / 62. Best fit: the cheapest way to get real **native audio plus vision** at a 256K window on one GPU, and a strong local instruction-follower (IFBench #38) — but treat its agentic numbers as unproven, since the one independently-run agentic benchmark puts TerminalBench Hard at 18.2% against a much rosier vendor Tau2 figure.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-05
- Method: public internet research (official `google/gemma-4-12B` Hugging Face model card read in full including the six-model family comparison tables, Google AI Gemma 4 model card and release-history pages, Artificial Analysis's Gemma 4 12B (Reasoning) model page, BenchLM comparison and profile mirrors, CloudPrice and Opper spec/leaderboard records, Franklin AI and aiflashreport benchmark mirrors, and models.dev API cross-provider pricing for every `gemma-4-12b` route). Every number carries its source and harness; vendor-vs-third-party conflicts are reported as conflicts rather than averaged. Scores are normalized 1–100 interpretations per `../../model-comparison.md`, not official vendor scores.
- Known caveats: the Tau2 row differs by more than 2× between Google's card (69.0% avg over 3) and Artificial Analysis (τ²-Bench Telecom 36.3%), and the HLE row differs by ~10 pts — both single-harness readings; the AA figures come from the "Reasoning" route, which may not be identical to `gemma-4-12B-it` under Google's own settings; context window is 256K natively but the two cheapest hosts cap it at 131K or 32K; and this folder's `meta.json` is a stale auto-scaffold (it records "128K total" and "Text in/out", and is not marked `scaffolded`), which understates both the context and the modality coverage.
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B_A4B.md`, using the same headings.