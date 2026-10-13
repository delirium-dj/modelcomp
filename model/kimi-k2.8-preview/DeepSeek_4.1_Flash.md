# Kimi K2.8 Preview — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI / Kimi K2.8 Preview (`kimi-for-coding`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Still no
> published benchmark for this checkpoint, but this pass confirmed two facts the first
> report left partly unverified: Moonshot's own Kimi Code **model configuration page**
> now documents **image + video input** and the **1,048,576-token window** on every Kimi
> Code plan (primary source, corroborated by HokAI checked 2026-10-10, k3-kimi.com
> 2026-09-25, LLM-Stats and the ZenMux listing). One reseller (ZenMux) lists an
> undocumented **$1 / $4 per-Mtok** price and one aggregator claims free-tier access —
> both conflict with Moonshot's official pages, so they are flagged, not scored.

## Model card

- **Name:** Kimi K2.8 Preview (served at the existing `kimi-for-coding` model ID; no free Zen ID)
- **Short description:** Moonshot AI's mid-tier coding and agentic model, rolled out inside the Kimi Code product on 2026-09-11 at the same model ID that previously answered for Kimi K2.7 Code — so existing clients received the upgrade with no configuration change. It sits between K2.7 Code (June 2026, 256K context) and the flagship Kimi K3 (July 2026, 2.8T parameters), and Moonshot's only performance claim is qualitative: coding and agent capability improved "across the board" and overall capability close to K3 with more efficient thinking. Sources: https://www.kimi.com/code/docs/en/kimi-code/whats-new.html and https://www.kimi.com/code/docs/en/kimi-code/models.html (primary; both fetched 2026-10-11); https://hokai.io/hub/models/kimi-k2.8-preview and https://llm-stats.com/models/kimi-k2.8
- **Provider / access:** **Only inside Moonshot's own products** (Kimi Code CLI / VS Code / Desktop and, per secondary reports, Kimi Work) at the `kimi-for-coding` model ID, plus Kimi Code's OpenAI- and Anthropic-compatible API routes (`https://api.kimi.ai/coding/v1`, `https://api.kimi.ai/coding/`) billed against the membership quota. It is **not** on Moonshot's Open Platform pay-as-you-go API or price table, and unlike K2.6/K2.7 Code there is no Hugging Face repository or public license. Sources: https://www.kimi.com/code/docs/en/kimi-code/models.html ; https://k3-kimi.com/blog/kimi-k2-8-preview/ ; https://hokai.io/hub/models/kimi-k2.8-preview
- **Release / knowledge:** 2026-09-11. No model card, knowledge cutoff, system card or data-retention policy published. Sources: https://www.kimi.com/code/docs/en/kimi-code/whats-new.html ; https://hokai.io/hub/models/kimi-k2.8-preview
- **IDs:** `kimi-for-coding` (product route). No separate public pay-as-you-go API id; no OpenCode Zen Free ID. `k3-256k` rejects video, so the video-capable routes are `k3` and `kimi-for-coding`. Sources: https://www.kimi.com/code/docs/en/kimi-code/models.html ; https://k3-kimi.com/blog/kimi-k2-8-preview/
- **Context window:** 1,048,576 tokens — the Kimi Code model table lists `1048576` for `kimi-for-coding` and the changelog says the full window is now open to **every** membership tier that includes Kimi Code (Plus and above on the new plans, Andante and above on legacy plans), a limit Moonshot previously reserved for higher plans. On Plus/Moderato this makes K2.8 Preview the only 1M option, since `k3` is capped at 256K there. Sources: https://www.kimi.com/code/docs/en/kimi-code/models.html ; https://k3-kimi.com/blog/kimi-k2-8-preview/ ; https://llm-stats.com/models/kimi-k2.8
- **Modalities:** text, **image and video** input with text, tool-call and code output. Previously flagged as a tracker-only claim, video input is now confirmed by Moonshot's own model table ("Image, video") and echoed by LLM-Stats (Text/Image/Video in, Text out) and ZenMux. Audio input is still unconfirmed. Sources: https://www.kimi.com/code/docs/en/kimi-code/models.html ; https://llm-stats.com/models/kimi-k2.8
- **Pricing (as of 2026-10-11):** **not billed per token on Moonshot's side** — it rides on whichever Kimi membership plan the account holds, with no separate line item on Moonshot's Open Platform price table (which lists only `kimi-k3`, `kimi-k2.7-code`, `kimi-k2.7-code-highspeed`, `kimi-k2.6`). ZenMux, a reseller, lists `moonshotai/kimi-k2.8-preview` at **$1 in / $4 out / $0.25 cache read per Mtok** with ~39.8 tok/s measured throughput; Moonshot documents none of this, so it is unofficial. Sources: https://www.kimi.com/code/docs/en/kimi-code/models.html ; https://zenmux.ai/moonshotai/kimi-k2.8-preview ; https://k3-kimi.com/blog/kimi-k2-8-preview/
- **Architecture:** undisclosed for this checkpoint. Because it answers at the same endpoint as K2.7 Code with "no configuration change required," it most likely shares that model's MoE transformer design (1T total / 32B active per token), but that is an inference from the shared route, not a confirmed K2.8 spec. One aggregator speculatively attributes K3's KDA hybrid-linear-attention scheme to K2.8 with no Moonshot source; not counted. Reasoning effort is exposed as three levels — low, high, max (max default), matching K3's set but with a different default (K3 defaults to high). With thinking disabled, requests to the K3 series and K2.8 Preview are served by K2.8 Preview (no thinking). Sources: https://www.kimi.com/code/docs/en/kimi-code/models.html ; https://hokai.io/hub/models/kimi-k2.8-preview ; https://www.ai-all.info/en/ai-models/k2-8-preview-kimi

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 2.0: **no independently verified public score found**
- Tau3-Banking / Tau2-Bench: **no independently verified public score found**
- GDPval-AA: **no independently verified public score found**
- Claw-Eval / ClawProBench: **no independently verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no independently verified public score found**
- Vendor claim only: coding and agent capability "improved across the board", overall "close to K3". Source: https://www.kimi.com/code/docs/en/kimi-code/whats-new.html
- HokAI states plainly that Moonshot "has published no benchmark score for K2.8 Preview as of October 10, 2026, and no Artificial Analysis page exists for it." Source: https://hokai.io/hub/models/kimi-k2.8-preview

Reasoning / knowledge:

- GPQA Diamond: **no independently verified public score found** for K2.8. Reference point: flagship **Kimi K3** reported **93.5%** at its July 2026 release — that figure belongs to K3 and must not be assumed to carry over. Sources: https://hokai.io/hub/models/kimi-k2.8-preview
- HLE / CritPt / LCR / MLCR / MMLU-Pro: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no entry found** for this checkpoint — the ZenMux "Artificial Analysis Intelligence Index" panel is empty. Source: https://zenmux.ai/moonshotai/kimi-k2.8-preview
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no independently verified public score found**
- Reference point: **Kimi K3** reported **67.5%** on DeepSWE at release, ahead of GPT-5 and open peers such as DeepSeek V4 and GLM-5.2 on several evals — again K3's number, not K2.8's. Secondary reference: **K2.7 Code** reported Kimi Code Bench v2 62.0 and MCP-Atlas 76.0 on its Hugging Face card — also not K2.8's. Source: https://k3-kimi.com/blog/kimi-k2-8-preview/
- The one freshly confirmed capability change is context: a 1,048,576-token window on every Kimi Code tier, plus confirmed video input. Source: https://www.kimi.com/code/docs/en/kimi-code/models.html

Long context:

- no MRCR/RULER/GraphWalks recall value published for K2.8 Preview; the 1M window is a product-tier change with no retrieval evidence behind it. Source: https://www.kimi.com/code/docs/en/kimi-code/models.html

Multimodal:

- Input: text, **image and video** (Moonshot Kimi Code model table; LLM-Stats). Output: text / tool-calls / code. No multimodal benchmark (MMMU, video-QA) published. Sources: https://www.kimi.com/code/docs/en/kimi-code/models.html ; https://llm-stats.com/models/kimi-k2.8

### Normalized scores (1–100)

- **Tool use: 75/100.** It is positioned as an agentic coding model with a 1M window, video input and three effort levels inside Kimi Code, but not one published Terminal-Bench, Tau3, GDPval or Claw result verifies capability, which caps the score hard (HokAI, 2026-10-10, confirms zero published scores). Unchanged from the first pass.
- **Reasoning: 70/100.** No GPQA, HLE or composite index exists for this checkpoint; the mark reflects a mid-tier slot in Moonshot's lineup plus the vendor's efficiency claim, not measurement. Unchanged. Source: https://hokai.io/hub/models/kimi-k2.8-preview
- **Context window: 95/100.** A 1,048,576-token window opened to every Kimi Code membership tier is a genuine, confirmed upgrade; no recall-at-depth benchmark keeps it below the maximum. Unchanged. Source: https://www.kimi.com/code/docs/en/kimi-code/models.html
- **Multimodal: 78/100.** Raised from 60: image **and video** input are now confirmed by Moonshot's own model table (previously a tracker-only claim), placing it in the file's "+video/PDF in = 75–90" band; no audio input or benchmark keeps it in the lower half. Source: https://www.kimi.com/code/docs/en/kimi-code/models.html
- **Coding: 78/100.** The model exists to serve Kimi Code and Moonshot positions it near K3 (which reported 67.5% DeepSWE), but no K2.8-specific coding benchmark, parameter count or architecture is published. Unchanged. Source: https://k3-kimi.com/blog/kimi-k2-8-preview/
- **Cost efficiency: 90/100.** No per-token charge — it is bundled into an existing Kimi membership, which is excellent for subscribers and worthless to teams needing a standalone API. An unofficial reseller price ($1/$4 per Mtok) exists but Moonshot documents none, so it is not scored. Sources: https://www.kimi.com/code/docs/en/kimi-code/models.html ; https://zenmux.ai/moonshotai/kimi-k2.8-preview
- **Overall Score: 79/100.** (75 + 70 + 95 + 78 + 78) / 5 = 79.2 → **79**. Best fit: existing Kimi Code subscribers (Plus/Andante and up) who want a 1M-context, image/video-capable coding model without a K3-tier plan; avoid it if you need a benchmarked, documented, open-weight or per-token-billed model.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research (Moonshot Kimi Code What's New + Model Configuration docs; HokAI 2026-10-10; k3-kimi.com 2026-09-25; LLM-Stats model page; ZenMux reseller listing; ai-all.info and AI Quill reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
